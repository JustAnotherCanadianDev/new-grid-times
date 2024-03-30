import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";
import { QUERIES } from "../../constants";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";

const SpecialtyStoryGrid = () => {
    return (
        <Wrapper>
            <MarketsSection>
                <SectionTitle
                    cornerLink={{
                        href: "/markets",
                        content: "Visit Markets data »",
                    }}
                >
                    Markets
                </SectionTitle>
                <MarketCards>
                    {MARKET_DATA.map((data) => (
                        <MarketCard key={data.tickerSymbol} {...data} />
                    ))}
                </MarketCards>
            </MarketsSection>
            <SportsSection>
                <SectionTitle
                    cornerLink={{
                        href: "/sports",
                        content: "Visit Sports page »",
                    }}
                >
                    Sports
                </SectionTitle>
                <SportsStories>
                    {SPORTS_STORIES.map((data) => (
                        <MiniStory key={data.id} {...data} />
                    ))}
                </SportsStories>
            </SportsSection>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    gap: 48px;
    grid-template-columns: minmax(0px, 1fr);

    @media ${QUERIES.desktopAndUp} {
        grid-template-columns: minmax(0px, 1fr) minmax(0px, 1fr);
    }
`;

const MarketsSection = styled.section``;

const MarketCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(50%, 200px), 1fr));
    gap: 16px;
`;

const SportsSection = styled.section``;

const SportsStories = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(50%, 200px), 1fr));
    gap: 16px;

    --padding-offset: 16px;
    margin-right: calc(var(--padding-offset) * -1);
    margin-left: calc(var(--padding-offset) * -1);
    padding-right: var(--padding-offset);
    padding-left: var(--padding-offset);

    @media ${QUERIES.tabletAndUp} {
        overflow: auto;
        display: flex;
    }
`;

export default SpecialtyStoryGrid;
