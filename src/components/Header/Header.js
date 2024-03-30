import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
    return (
        <header>
            <SuperHeader>
                <Row>
                    <ActionGroup>
                        <button>
                            <Search size={24} />
                        </button>
                        <button>
                            <Menu size={24} />
                        </button>
                    </ActionGroup>
                    <ActionGroup>
                        <button>
                            <User size={24} />
                        </button>
                    </ActionGroup>
                </Row>
            </SuperHeader>
            <MainHeader>
                <ActionGroupInline>
                    <button>
                        <Search size={24} />
                    </button>
                    <button>
                        <Menu size={24} />
                    </button>
                </ActionGroupInline>
                <Logo />
                <SubscribeWrapper>
                    <Button>Subscribe</Button>
                    <p>Already a subscriber?</p>
                </SubscribeWrapper>
            </MainHeader>
        </header>
    );
};

const SuperHeader = styled.div`
    padding: 16px 0;
    background: var(--color-gray-900);
    color: white;

    @media ${QUERIES.desktopAndUp} {
        display: none;
    }
`;

const Row = styled(MaxWidthWrapper)`
    display: flex;
    justify-content: space-between;
`;

const ActionGroup = styled.div`
    display: flex;
    gap: 24px;

    /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
    svg {
        display: block;
    }
`;

const ActionGroupInline = styled(ActionGroup)`
    display: none;
    @media ${QUERIES.desktopAndUp} {
        display: flex;
        flex: 1;
    }
`;

const SubscribeWrapper = styled(ActionGroup)`
    display: none;
    @media ${QUERIES.desktopAndUp} {
        margin-top: 16px;
        display: grid;
        flex: 1;
        justify-content: flex-end;
        align-items; center;
        gap: 4px;
    }
`;

const MainHeader = styled(MaxWidthWrapper)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 48px;
`;

export default Header;
