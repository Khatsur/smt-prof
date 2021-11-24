import React from 'react'
import PropTypes from 'prop-types'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import NavBar, { NavItem, NavLink, Submenu, Megamenu } from '../../ui/navbar'
import { MainMenuWrap } from './mainmenu.style'
import Heading from '../../ui/heading'

const tlink = [
    {"title": "Установщики JUKI",
    "link": "/оборудование-для-монтажа/поверхностный-монтаж/автомат-поверхностного-монтажа"
    },
    {"title": "Принтеры пасты",
    "link": "/оборудование-для-монтажа/поверхностный-монтаж/принтеры-паяльной-пасты"
    },
    {"title": "Установщики SMD",
    "link": "/оборудование-для-монтажа/поверхностный-монтаж/автоматы-установки-компонентов"
    },
    {"title": "Паяльные печи",
    "link": "/оборудование-для-монтажа/поверхностный-монтаж/печи-паяльные"
    },
    {"title": "Монтаж в отверстия",
    "link": "/оборудование-для-монтажа/монтаж-в-отверстия"
    },
    {"title": "Оптическая инспекция",
    "link": "/оборудование-для-монтажа/оптическая-инспекция"
    },
    {"title": "Перемещение плат",
    "link": "/оборудование-для-монтажа/поверхностный-монтаж/перемещение-печатных-плат"
    },
    {"title": "Машины для мойки",
    "link": "/оборудование-для-монтажа/оборудование-для-мойки"
    },
    {"title": "Защита плат",
    "link": "/оборудование-для-монтажа/влагозащита-электроники"
    },
    {"title": "Разделение плат",
    "link": "/оборудование-для-монтажа/разделение-групповых-заготовок"
    },
    {"title": "Хранение",
    "link": "/оборудование-для-монтажа/автоматизированные-системы-хранения"
    },
    {"title": "Вытяжка",
    "link": "/оборудование-для-монтажа/дымоулавливающие-системы"
    },
    {"title": "Обработка провода",
    "link": "/оборудование-для-монтажа/обработка-провода"
    },
    {"title": "Дозаторы",
    "link": "/оборудование-для-монтажа/дозаторы-паяльной-пасты"
    },
    {"title": "Автомати JUKI",
    "link": "/ua/обладнання-для-монтажу/поверхневий-монтаж/автомат-поверхневого-монтажу"
    },
    {"title": "Принтери пасти",
    "link": "/ua/обладнання-для-монтажу/поверхневий-монтаж/принтери-паяльної-пасти"
    },
    {"title": "Автомати P&P SMD",
    "link": "/ua/обладнання-для-монтажу/поверхневий-монтаж/автомати-встановлення-компонентів"
    },
    {"title": "Паяльні печі",
    "link": "/ua/обладнання-для-монтажу/поверхневий-монтаж/печі-паяльні"
    },
    {"title": "Монтаж в отвори",
    "link": "/ua/обладнання-для-монтажу/монтаж-в-отвори"
    },
    {"title": "Оптична інспекція",
    "link": "/ua/обладнання-для-монтажу/оптична-інспекція"
    },
    {"title": "Переміщення плат",
    "link": "/ua/обладнання-для-монтажу/поверхневий-монтаж/переміщення-друкованих-плат"
    },
    {"title": "Машини для миття",
    "link": "/ua/обладнання-для-монтажу/обладнання-для-миття"
    },
    {"title": "Захист плат",
    "link": "/ua/обладнання-для-монтажу/захист-електроніки"
    },
    {"title": "Розділення плат",
    "link": "/ua/обладнання-для-монтажу/розділення-групових-панелей"
    },
    {"title": "Зберігання",
    "link": "/ua/обладнання-для-монтажу/автоматизовані-системи-зберігання"
    },
    {"title": "Витяжка",
    "link": "/ua/обладнання-для-монтажу/системи-уловлювання-диму"
    },
    {"title": "Обробка проводів",
    "link": "/ua/обладнання-для-монтажу/обробка-проводу"
    },
    {"title": "Дозатори",
    "link": "/ua/обладнання-для-монтажу/дозатори-паяльної-пасти"
    },
    {"title": "Поверхностный монтаж",
    "link": "/комплексные-решения/линия-поверхностного-монтажа"
    },
    {"title": "Выводной монтаж",
    "link": "/комплексные-решения/линия-выводного-монтажа"
    },
    {"title": "Покрытие плат",
    "link": "/комплексные-решения/линия-покрытия-печатных-плат"
    },
    {"title": "Оптическая инспекция",
    "link": "/комплексные-решения/линия-оптической-инспекции"
    },
    {"title": "Поверхневий монтаж",
    "link": "/ua/комплексні-рішення/лінія-поверхневого-монтажу"
    },
    {"title": "Монтаж вивідний",
    "link": "/ua/комплексні-рішення/лінія-монтажу-в-отвори"
    },
    {"title": "Покриття плат",
    "link": "/ua/комплексні-рішення/лінія-покриття-друкованих-плат"
    },
    {"title": "Оптична інспекція",
    "link": "/ua/комплексні-рішення/лінія-оптичної-інспекції"
    }
]

export const MainMenu = ({ headingStyle, menuData, ...props }) => {
    const menuarr = menuData;
    return (
        <MainMenuWrap {...props}>
            <NavBar>
                {menuarr.map(menu => {
                    const submenu = menu.node.submenu ? menu.node.submenu : null;
                    const megamenu = menu.node.megamenu ? menu.node.megamenu : null;
                    return (
                        <NavItem key={`mainmenu-${menu.node.id}`} hasSubmenu={submenu} hasMegamenu={megamenu}>
                            <NavLink path={menu.node.link} hassubmenu={(submenu || megamenu) ? "true" : "false"}>
                                <span>{menu.node.text}</span>
                                {(submenu || megamenu) && <MdKeyboardArrowDown className="icon" />}
                            </NavLink>
                            {submenu && (
                                <Submenu>
                                    {submenu.map((subitem, i) => {
                                        const hasSubmenuLevelTwo = subitem.isSubmenu;
                                        const submenuLevelTwo = subitem.submenu;
                                        const submenuIndex = i;
                                        return (
                                            <NavItem key={`submenu-${menu.node.id}-${submenuIndex}`}>
                                                <NavLink path={subitem.link}>
                                                    <span>{subitem.text}</span>
                                                    {hasSubmenuLevelTwo && <MdKeyboardArrowRight className="icon" />}
                                                </NavLink>
                                                {submenuLevelTwo && (
                                                    <Submenu>
                                                        {submenuLevelTwo.map((subitemLevelTwo, j) => {
                                                            const subsubmenuIndex = j;
                                                            return (
                                                                <NavItem key={`submenu-${menu.node.id}-${submenuIndex}-${subsubmenuIndex}`}>
                                                                    <NavLink path={subitemLevelTwo.link}>{subitemLevelTwo.text}</NavLink>
                                                                </NavItem>
                                                            )
                                                        })}
                                                    </Submenu>
                                                )}
                                            </NavItem>
                                        )
                                    })}
                                </Submenu>
                            )}
                            {megamenu && (
                                <Megamenu>
                                    {megamenu.map((megaitem, i) => {
                                        const megaSubmenu = megaitem.submenu;
                                        const megaIndex = i;
                                        let linktitle = "";
                                        
                                        for (let i = 0; i < tlink.length; i++) {
                                            if (tlink[i].title ===  megaitem.title) {
                                                linktitle = tlink[i].link
                                                i = tlink.length
                                            }
                                        }
                                        return (
                                          <NavItem key={`megamenu-${menu.node.id}-${megaIndex}`} >
                                            <NavLink path={`${linktitle}`} >  
                                                <Heading {...headingStyle} >{megaitem.title} </Heading>
                                            </NavLink>  
                                                
                                                {megaSubmenu && (
                                                    <Submenu>
                                                        {megaSubmenu.map((megaSubitem, i) => {
                                                            return (
                                                                <NavItem key={`megasubmenu-${megaIndex}-${i}`}>
                                                                    <NavLink path={megaSubitem.link}>
                                                                        <span>{megaSubitem.text}</span>
                                                                    </NavLink>
                                                                </NavItem>
                                                            )
                                                        })}
                                                    </Submenu>
                                                )}
                                            </NavItem>
                                        )
                                    })}
                                </Megamenu>
                            )}
                        </NavItem>
                    )
                })}
            </NavBar>
        </MainMenuWrap>
    )
}

MainMenu.propTypes = {
    alignment: PropTypes.string,
    headingStyle: PropTypes.object
}

MainMenu.defaultProps = {
    alignment: 'center',
    headingStyle: {
        fontSize: '14px',
        mb: '20px',
        texttransform: 'uppercase'
    }
} 