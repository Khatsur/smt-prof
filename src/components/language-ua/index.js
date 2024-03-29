import React, {useState}  from 'react'
import PropTypes from 'prop-types';
import Dropdown from '../ui/dropdown'
import DropdownItem from '../ui/dropdown/dropdown-item'
import DropdownItemInner from '../ui/dropdown/dropdown-item-inner'
import DropdownSubMenu from '../ui/dropdown/dropdown-submenu'
import enFlag from '../../assets/images/flags/en1.png'
import ukFlag from '../../assets/images/flags/ukr.png'
import ruFlag from '../../assets/images/flags/ru.png'
import {LanguageWrap} from '../language-ua/language.style'
import {PagePath} from '../pagepath'

export const Language = props => {
    let ua;
    let ru;
    let en;
    for (let i = 0; i < PagePath.length; i++) {
        if (PagePath[i].ua == props.path) {
            ru = `../../../../../../${PagePath[i].ru}`;
            en = `../../../../../../${PagePath[i].en}`;
            i = PagePath.length;
        } else {
            ru = "/ru";
            en = "../../../../../../en";
        }
    };
    // language change
    const [language, setLanguage] = useState([
        {
            id: 1,
            flag: ruFlag,
            name: ' RU',
            isActive: false,
            link: ru
        },
        {
            id: 2,
            flag: ukFlag,
            name: ' UA',
            isActive: true,
            link: ua
        },
        {
            id: 3,
            flag: enFlag,
            name: ' EN',
            isActive: false,
            link: en
        }
    ])

    let activeLanguage = language.filter(el => {
        return el.isActive;
    });

    let inActiveLanguage = language.filter(el => {
        return !el.isActive
    });

    const onClickHandler = (id) => {
        const copiedState = [...language];
        const languageArr = copiedState.map(lang => {
            if(lang.id !== id){
                return {
                    ...lang,
                    isActive: false
                }
            }
            return {
                ...lang,
                isActive: true
            }
        })
        setLanguage(languageArr);
    }

    return (
        <LanguageWrap {...props} >
            <Dropdown >
                <DropdownItem active >
                    <DropdownItemInner style={{ backgroundColor: "rgba(0,0,0,0)"}}>
                        <img src={activeLanguage[0].flag} alt={activeLanguage[0].name} />
                        
                    </DropdownItemInner>
                    <DropdownSubMenu>
                        {
                            inActiveLanguage.map(lang => {
                                const {id, name, flag, link} = lang;
                                return (
                                    <DropdownItem key={id} onClick={() => onClickHandler(id)}>
                                        
                                        <a href={link}>

                                            <DropdownItemInner>
                                            <img src={flag} alt={name}/>
                                            <span>{name}</span>

                                            </DropdownItemInner>
                                            </a>
                                        
                                    </DropdownItem>
                                )
                            })
                        }
                    </DropdownSubMenu>
                </DropdownItem>
            </Dropdown>
        </LanguageWrap>
    )
}

Language.propTypes = {
    spacer: PropTypes.object,
}


export default Language
