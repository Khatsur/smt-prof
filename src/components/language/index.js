import React, {useState}  from 'react'
import PropTypes from 'prop-types';
import Dropdown from '../ui/dropdown'
import DropdownItem from '../ui/dropdown/dropdown-item'
import DropdownItemInner from '../ui/dropdown/dropdown-item-inner'
import DropdownSubMenu from '../ui/dropdown/dropdown-submenu'
import enFlag from '../../assets/images/flags/en.png'
import frFlag from '../../assets/images/flags/fr.png'
import deFlag from '../../assets/images/flags/de.png'
import {LanguageWrap} from './language.style'

const Language = props => {
    const [language, setLanguage] = useState([
        {
            id: 1,
            flag: enFlag,
            name: 'RU',
            isActive: true,
            link: "https://www.smt-prof.com.ua"
        },
        {
            id: 2,
            flag: frFlag,
            name: 'UA',
            isActive: false,
            link: "https://www.smt-prof.com.ua"
        },
        {
            id: 3,
            flag: deFlag,
            name: 'EN',
            isActive: false,
            link: "https://www.smt-prof.com.ua"
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
        <LanguageWrap {...props}>
            <Dropdown>
                <DropdownItem active>
                    <DropdownItemInner active>
                        <img src={activeLanguage[0].flag} alt={activeLanguage[0].name}/>
                        <span>{activeLanguage[0].name}</span>
                    </DropdownItemInner>
                    <DropdownSubMenu>
                        {
                            inActiveLanguage.map(lang => {
                                const {id, name, flag, link} = lang;
                                return (
                                    <DropdownItem key={id} onClick={() => onClickHandler(id)}>
                                        <DropdownItemInner>
                                        <a href={link}>
                                            <img src={flag} alt={name}/>
                                            <span>{name}</span>
                                            </a>
                                        </DropdownItemInner>
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
