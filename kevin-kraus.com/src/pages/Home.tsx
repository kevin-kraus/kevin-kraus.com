import React from 'react'
import {PageContent} from "../components/PageContent/PageContent";
import {HeaderBar} from "../components/HeaderBar/HeaderBar";
import {GenericCard} from "../components/GenericCard/GenericCard";
import kkraus from "../assets/kkraus/wave_memoji.png"


export function Home() {
    return (
        <div>
            <HeaderBar />
            <PageContent>
                <GenericCard title={"Hi!"} text={"Test Text!"} image={kkraus} />
                <GenericCard title={"Hi!"} text={"Test Text!"} image={kkraus} />
                <GenericCard title={"Hi!"} text={"Test Text!"} image={kkraus} />
                <GenericCard title={"Hi!"} text={"Test Text!"} image={kkraus} />
                <GenericCard title={"Hi!"} text={"Test Text!"} image={kkraus} />

                <GenericCard title={"Hi!"} text={"Test Text!"} image={kkraus} />
                <GenericCard title={"Hi!"} text={"Test Text!"} image={kkraus} />
                <GenericCard title={"Hi!"} text={"Test Text!"} image={kkraus} />
                <GenericCard title={"Hi!"} text={"Test Text!"} image={kkraus} />
                <GenericCard title={"Hi!"} text={"Test Text!"} image={kkraus} />

                <GenericCard title={"Hi!"} text={"Test Text!"} image={kkraus} />
                <GenericCard title={"Hi!"} text={"Test Text!"} image={kkraus} />
                <GenericCard title={"Hi!"} text={"Test Text!"} image={kkraus} />
                <GenericCard title={"Hi!"} text={"Test Text!"} image={kkraus} />
                <GenericCard title={"Hi!"} text={"Test Text!"} image={kkraus} />

                <GenericCard title={"Hi!"} text={"Test Text!"} image={kkraus} />
                <GenericCard title={"Hi!"} text={"Test Text!"} image={kkraus} />
                <GenericCard title={"Hi!"} text={"Test Text!"} image={kkraus} />
                <GenericCard title={"Hi!"} text={"Test Text!"} image={kkraus} />
                <GenericCard title={"Hi!"} text={"Test Text!"} image={kkraus} />
            </PageContent>
        </div>
    )
}
