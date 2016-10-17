import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, ListView, Text, TouchableHighlight} from 'react-native';

import Wrapper from '../../components/Wrapper';
import Header from '../../components/header';
import MenuButton from '../../components/menuButton';
import HeaderTitle from '../../components/headerTitle';
import SearchButton from '../../components/searchButton';
import TopTabs from '../../components/topTabs';
import TopTabsButton from '../../components/topTabsButton';
import Content from '../../components/Content';
import ContentScroll from '../../components/ContentScroll';
import MainList from '../../components/MainList';
import MainListItem from '../../components/MainListItem';
import Footer from '../../components/footer';
import FooterItem from '../../components/FooterItem';
import AddNewLitterButton from '../../components/AddNewLitterButton';
import CheckBox from '../../components/CheckBox';

import { replaceRoute } from '../../actions/route';


import styles from './styles';

export default class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1
        };
    }
    _renderTabContent() {
        switch(this.state.activeTab) {
            case 1:
                return (
                    <MainList activeTab={this.state.activeTab}>
                        <MainListItem
                            title="Litter #1"
                            text="6 puppies by Aldo and Renda"
                            icon="0"
                            routName=""
                        />
                        <MainListItem title="Litter #2" text="4 puppies by Charlie and Bailey" icon="0" />
                        <MainListItem title="Litter #3" text="5 puppies by Buster and Coco" icon="0" />
                        <MainListItem title="Litter #3" text="5 puppies by Buster and Coco" icon="0" />
                        <MainListItem title="Litter #3" text="5 puppies by Buster and Coco" icon="0" />
                        <MainListItem title="Litter #3" text="5 puppies by Buster and Coco" icon="0" />
                        <MainListItem title="Litter #3" text="5 puppies by Buster and Coco" icon="0" />
                        <MainListItem title="Litter #3" text="555 puppies by Buster and Coco" icon="0" />
                    </MainList>
                );
            case 2:
                return (
                    <MainList activeTab={this.state.activeTab}>
                        <MainListItem
                            image="http://antongerasimov.com/demo/breeder/layer-2.png"
                            icon="0"
                            title="Jack Daniels von der Liebeswa"
                            text="litter #4"
                        />
                        <MainListItem
                            image="http://antongerasimov.com/demo/breeder/layer-4.png"
                            icon="0"
                            title="BandM's Bull Demon King of..."
                            text="litter #1"
                        />
                        <MainListItem
                            image="http://antongerasimov.com/demo/breeder/layer-6.png"
                            icon="0"
                            title="Guinevere of Excalibur Quest"
                            text="litter #5"
                            routName="PuppyCard"
                        />
                        <MainListItem
                            image="http://antongerasimov.com/demo/breeder/layer-8.png"
                            icon="0"
                            title="Chernika Iz Mariaksa"
                            text="litter #2"
                        />
                        <MainListItem
                            image="http://antongerasimov.com/demo/breeder/layer-10.png"
                            icon="0"
                            title="Ribessita The Story of Tomahaw..."
                            text="litter #2"
                        />
                        <MainListItem
                            image="http://antongerasimov.com/demo/breeder/layer-12.png"
                            icon="0"
                            title="Inglisilm Devil Red"
                            text="litter #3"
                        />
                        <MainListItem
                            image="http://antongerasimov.com/demo/breeder/layer-2.png"
                            icon="0"
                            title="Jack Daniels von der Liebeswa"
                            text="litter #4"
                        />
                        <MainListItem
                            image="http://antongerasimov.com/demo/breeder/layer-4.png"
                            icon="0"
                            title="BandM's Bull Demon King of..."
                            text="litter #1"
                        />
                        <MainListItem
                            image="http://antongerasimov.com/demo/breeder/layer-6.png"
                            icon="0"
                            title="Guinevere of Excalibur Quest"
                            text="litter #5"
                            routName="PuppyCard"
                        />
                        <MainListItem
                            image="http://antongerasimov.com/demo/breeder/layer-8.png"
                            icon="0"
                            title="Chernika Iz Mariaksa"
                            text="litter #2"
                        />
                        <MainListItem
                            image="http://antongerasimov.com/demo/breeder/layer-10.png"
                            icon="0"
                            title="Ribessita The Story of Tomahaw..."
                            text="litter #2"
                        />
                        <MainListItem
                            image="http://antongerasimov.com/demo/breeder/layer-12.png"
                            icon="0"
                            title="Inglisilm Devil Red"
                            text="litter #3"
                        />

                    </MainList>
                );
            case 3:
                return (
                    <MainList activeTab={this.state.activeTab}>
                        <MainListItem
                            icon="0"
                            title="Sophie Barnett"
                            text="(189)-164-4208">
                            <CheckBox checked={true} icon="1" iconActive="2" w="15" h="14.5" />
                        </MainListItem>
                        <MainListItem
                            icon="0"
                            title="Kenneth Jimenez"
                            text="(951)-423-2690">
                            <CheckBox checked={true} icon="1" iconActive="2" w="15" h="14.5" />
                        </MainListItem>
                        <MainListItem
                            icon="0"
                            title="Dylan Robinson"
                            text="(722)-346-9131">
                            <CheckBox checked={true} icon="1" iconActive="2" w="15" h="14.5" />
                        </MainListItem>
                        <MainListItem
                            icon="0"
                            title="Sophie Barnett"
                            text="(189)-164-4208">
                            <CheckBox checked={true} icon="1" iconActive="2" w="15" h="14.5" />
                        </MainListItem>
                        <MainListItem
                            icon="0"
                            title="Kenneth Jimenez"
                            text="(951)-423-2690">
                            <CheckBox checked={true} icon="1" iconActive="2" w="15" h="14.5" />
                        </MainListItem>
                        <MainListItem
                            icon="0"
                            title="Dylan Robinson"
                            text="(722)-346-9131">
                            <CheckBox checked={true} icon="1" iconActive="2" w="15" h="14.5" />
                        </MainListItem>
                        <MainListItem
                            icon="0"
                            title="Sophie Barnett"
                            text="(189)-164-4208">
                            <CheckBox checked={true} icon="1" iconActive="2" w="15" h="14.5" />
                        </MainListItem>
                        <MainListItem
                            icon="0"
                            title="Kenneth Jimenez"
                            text="(951)-423-2690">
                            <CheckBox checked={true} icon="1" iconActive="2" w="15" h="14.5" />
                        </MainListItem>
                        <MainListItem
                            icon="0"
                            title="Dylan Robinson"
                            text="(722)-346-9131">
                            <CheckBox checked={true} icon="1" iconActive="2" w="15" h="14.5" />
                        </MainListItem>
                        <MainListItem
                            icon="0"
                            title="Sophie Barnett"
                            text="(189)-164-4208">
                            <CheckBox checked={true} icon="1" iconActive="2" w="15" h="14.5" />
                        </MainListItem>
                        <MainListItem
                            icon="0"
                            title="Kenneth Jimenez"
                            text="(951)-423-2690">
                            <CheckBox checked={true} icon="1" iconActive="2" w="15" h="14.5" />
                        </MainListItem>
                        <MainListItem
                            icon="0"
                            title="Dylan Robinson"
                            text="(722)-346-9131">
                            <CheckBox checked={true} icon="1" iconActive="2" w="15" h="14.5" />
                        </MainListItem>
                    </MainList>
                );
        }
    }
    _getCurrentTitle()
    {
        switch(this.state.activeTab) {
            case 1:
                return "Litters";
            case 2:
                return "Puppies";
            case 3:
                return "Buyers";
            default:
                return "Litters";
        }
    }
    _renderFooter() {
        switch(this.state.activeTab) {
            case 3:
                return (
                    <Footer>
                        <FooterItem icon="2" fText="Sell puppy" w="20" h="20" pos="first" />
                        <FooterItem icon="3" fText="Invoices" w="20" h="18.5" pos="last"  />
                    </Footer>
                );
            default:
                return (
                    <Footer>
                        <FooterItem icon="0" fText="Gallery" w="20" h="17" pos="first" />
                        <FooterItem icon="1" fText="Calendar" w="20" h="20" pos="last"  />
                    </Footer>
                );
        }
    }
    switchTab(activeTab) {
        if(this.state.activeTab != activeTab)
            this.setState({
                activeTab: activeTab
            });
    }

    render() {
        let _activeTab = this._renderTabContent(),
            _render_Footer = this._renderFooter();
            _current_title = this._getCurrentTitle();
        return (
                <Wrapper>
                    <Header>
                        <MenuButton>Menu</MenuButton>
                        <HeaderTitle title={_current_title} />
                        <SearchButton></SearchButton>
                    </Header>
                    <TopTabs>
                        <TopTabsButton isActive={this.state.activeTab === 1} pos="first" onPress={this.switchTab.bind(this, 1)}>Litters</TopTabsButton>
                        <TopTabsButton isActive={this.state.activeTab === 2} pos="center" onPress={this.switchTab.bind(this, 2)}>Puppies</TopTabsButton>
                        <TopTabsButton isActive={this.state.activeTab === 3} pos="last" onPress={this.switchTab.bind(this, 3)}>Buyers</TopTabsButton>
                    </TopTabs>
                    <ContentScroll>
                        <Content>
                            {_activeTab}
                        </Content>
                    </ContentScroll>
                    {_render_Footer}
                    <AddNewLitterButton />
                </Wrapper>

        );
    }
}
