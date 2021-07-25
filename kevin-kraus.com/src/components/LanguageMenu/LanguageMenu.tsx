import React, {useEffect, useState} from "react";
import {Language} from "@material-ui/icons";
import {Button, List, ListItem, ListItemIcon, ListItemText, Popover} from "@material-ui/core";
import i18n from "../../i18n";
import {useTranslation} from "react-i18next";
import styles from "./LanguageMenu.module.scss"

export const LanguageMenu = () => {
    let [selectedLanguage, setLanguage] = useState("en");
    let [menuIsOpen, setOpen] = useState(false);
    let [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

    const {t} = useTranslation("LanguageSwitcher");
    const handlePopUpOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (menuIsOpen) {
            setOpen(false);
            setAnchorEl(null);
        } else {
            setAnchorEl(event.currentTarget)
            setOpen(true);
        }

    }

    const handlePopUpClose = () => {
        setOpen(false)
        setAnchorEl(null)
    }
    useEffect(() => {
        setOpen(false);
        i18n.changeLanguage(selectedLanguage).then(() => console.log("New language: " + i18n.language))
    }, [selectedLanguage])

    return (
        <Button onClick={handlePopUpOpen}>
            <Language className={styles.language}/>
            <Popover
                open={menuIsOpen}
                anchorEl={anchorEl}
                onClose={handlePopUpClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <List>
                    {[{language: t("GERMAN"), key: "de", icon: "🇩🇪"}, {
                        language: t("ENGLISH"),
                        key: "en",
                        icon: "🇺🇸"
                    }]
                        .map((object, index) => (
                            <ListItem button key={object.language} onClick={() => setLanguage(object.key)}>
                                <ListItemIcon>{object.icon}</ListItemIcon>
                                <ListItemText primary={object.language}/>
                            </ListItem>
                        ))}
                </List>
            </Popover>
        </Button>
    )
}