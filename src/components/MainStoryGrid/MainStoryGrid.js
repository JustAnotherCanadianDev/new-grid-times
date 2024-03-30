import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
    return (
        <Wrapper>
            <MainStorySection>
                <MainStory {...MAIN_STORY} />
            </MainStorySection>

            <SecondaryStorySection>
                <StoryList>
                    {SECONDARY_STORIES.map((story, index) => (
                        <StoryWrapper>
                            <SecondaryStory key={story.id} {...story} />
                        </StoryWrapper>
                    ))}
                </StoryList>
            </SecondaryStorySection>

            <OpinionSection>
                <SectionTitle>Opinion</SectionTitle>
                <OpinionList>
                    {OPINION_STORIES.map((story, index) => (
                        <OpinionWrapper>
                            <OpinionStory key={story.id} {...story} />
                        </OpinionWrapper>
                    ))}
                </OpinionList>
            </OpinionSection>

            <AdvertisementSection>
                <Advertisement />
            </AdvertisementSection>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-areas:
        "main-story"
        "secondary-stories"
        "opinion-stories"
        "advertisement";
    gap: 48px;
    margin-bottom: 48px;

    @media ${QUERIES.tabletAndUp} {
        grid-template-areas:
            "main-story secondary-stories"
            "advertisement advertisement"
            "opinion-stories  opinion-stories";
        grid-template-columns: 1fr 300px;
    }

    @media ${QUERIES.desktopAndUp} {
        grid-template-areas:
            "main-story secondary-stories opinion-stories"
            "main-story advertisement advertisement";
        grid-template-columns: 1fr 390px 275px;
    }
`;

const MainStorySection = styled.section`
    grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
    grid-area: secondary-stories;
`;

const StoryList = styled.div`
    display: flex;
    flex-direction: column;
`;

const OpinionList = styled.div`
    display: flex;
    flex-direction: column;

    @media ${QUERIES.tabletOnly} {
        flex-direction: revert;
        gap: 8px;
    }
`;

const StoryWrapper = styled.div`
    border-bottom: 1px solid var(--color-gray-300);
    padding-bottom: 8px;
    margin-bottom: 8px;

    &:last-child {
        border: none;
    }
`;

const OpinionWrapper = styled.div`
    border-bottom: 1px solid var(--color-gray-300);
    padding-bottom: 8px;
    margin-bottom: 8px;
    flex: 1;

    &:last-child {
        border: none;
    }

    @media ${QUERIES.tabletOnly} {
        border: none;
    }
`;

const OpinionSection = styled.section`
    grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
    grid-area: advertisement;
`;

export default MainStoryGrid;
