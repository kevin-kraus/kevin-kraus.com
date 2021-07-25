import React from 'react'
import {MainCard} from "../components/MainCard/MainCard";
import {useTranslation} from "react-i18next";
import {PageContent} from "../components/PageContent/PageContent";
import {HeaderBar} from "../components/HeaderBar/HeaderBar";


export function Home() {
    const {t} = useTranslation("MainCard");
    return (
        <div>
            <HeaderBar />
            <PageContent>

            </PageContent>
        </div>
    )
}
