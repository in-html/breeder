import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, ListView, Text, TouchableHighlight} from 'react-native';

import Wrapper from '../../components/Wrapper';
import Header from '../../components/header';
import HeaderTitle from '../../components/headerTitle';
import Footer from '../../components/footer';
import FooterItem from '../../components/FooterItem';
import BackButton from '../../components/BackButton';
import EditButton from '../../components/EditButton';
import PuppyCardGallery from '../../components/PuppyCardGallery';
import PuppyCardMainInfo from '../../components/PuppyCardMainInfo';
import PuppyCardMainInfoItem from '../../components/PuppyCardMainInfoItem';
import PuppyCardParents from '../../components/PuppyCardParents';
import PuppyCardParentsItem from '../../components/PuppyCardParentsItem';
import Content from '../../components/Content';
import ContentScroll from '../../components/ContentScroll';
import MainList from '../../components/MainList';
import CheckBox from '../../components/CheckBox';

import { replaceRoute } from '../../actions/route';

export default class PuppyCardContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <Wrapper>
                    <Header>
                        <BackButton text="Back" />
                        <HeaderTitle title="Puppy Card" subTitle="german shepherd dog" />
                        <EditButton />
                    </Header>
                    <ContentScroll>
                        <PuppyCardGallery/>
                        <Content>
                            <PuppyCardMainInfo>
                                <PuppyCardMainInfoItem
                                    fieldNameWidth="79"
                                    fieldName="Name:"
                                    fieldValue="VA Argus Murphy vom Gronachtal"
                                />
                                <PuppyCardMainInfoItem
                                    fieldNameWidth="79"
                                    fieldName="Birthdate:"
                                    fieldValue="sep., 17, 2016"
                                    icon="0"
                                    iconWidth=""
                                    iconHeigh=""
                                />
                                <PuppyCardMainInfoItem
                                    fieldNameWidth="79"
                                    fieldName="Sex:"
                                    fieldValue="Male"
                                />
                            </PuppyCardMainInfo>
                            <MainList>
                                <PuppyCardParents icon="0">
                                    <PuppyCardParentsItem
                                        image="http://antongerasimov.com/demo/breeder/layer-27.png"
                                        title="V1 Canto von der Wienerau"
                                        text="sire"
                                    />
                                    <PuppyCardParentsItem
                                        image="http://antongerasimov.com/demo/breeder/layer-26.png"
                                        title="V20 Liane von der Wienerau"
                                        text="dam"
                                        pos="last"
                                    />
                                </PuppyCardParents>
                            </MainList>
                            <PuppyCardMainInfo>
                                <PuppyCardMainInfoItem
                                    fieldName="Breeder:"
                                    fieldValue="Vom Jagerhaus West German Shepherds"
                                />
                            </PuppyCardMainInfo>
                            <PuppyCardMainInfo title="Birth information" icon="0" w="20" h="20">
                                <PuppyCardMainInfoItem
                                    fieldName="Puppy#:"
                                    fieldValue="6"
                                />
                                <PuppyCardMainInfoItem
                                    fieldName="# in litter::"
                                    fieldValue="2"
                                />
                                <PuppyCardMainInfoItem
                                    fieldName="Birth time:"
                                    fieldValue="4:50 PM"
                                />
                                <PuppyCardMainInfoItem
                                    fieldName="Color:"
                                    fieldValue="Faded black and tan"
                                />
                                <PuppyCardMainInfoItem
                                    fieldName="Dew claws:"
                                    fieldValue="Removed"
                                />
                                <PuppyCardMainInfoItem
                                    fieldName="Position:"
                                    fieldValue="Head first"
                                />
                                <PuppyCardMainInfoItem
                                    fieldName="Weight:"
                                    fieldValue="1lb 9oz"
                                />
                            </PuppyCardMainInfo>
                            <PuppyCardMainInfo title="Markings" icon="1" w="20" h="18.5">
                                <PuppyCardMainInfoItem
                                    fieldName="Face:"
                                    fieldValue="Sooty face with tiny white.."
                                    itemImages={["http://antongerasimov.com/demo/breeder/image.png", "http://antongerasimov.com/demo/breeder/layer99.png"]}
                                />
                                <PuppyCardMainInfoItem
                                    fieldName="Neck:"
                                    fieldValue="?"
                                />
                                <PuppyCardMainInfoItem
                                    fieldName="Body:"
                                    fieldValue="?"
                                />
                                <PuppyCardMainInfoItem
                                    fieldName="Belly:"
                                    fieldValue="?"
                                />
                            </PuppyCardMainInfo>
                            <PuppyCardMainInfo title="Development" icon="2" w="19" h="20">
                                <PuppyCardMainInfoItem
                                    fieldName="Bark?"
                                    fieldNameWidth="130">
                                    <CheckBox label="no" labelActive="yes" checked={true} icon="0" w="10" h="8" />
                                </PuppyCardMainInfoItem>
                                <PuppyCardMainInfoItem
                                    fieldName="Eyes open?"
                                    fieldNameWidth="130">
                                    <CheckBox label="no" labelActive="yes" checked={true} icon="0" w="10" h="8"/>
                                </PuppyCardMainInfoItem>
                                <PuppyCardMainInfoItem
                                    fieldName="Teeth erupted?"
                                    fieldNameWidth="130">
                                    <CheckBox label="no" labelActive="yes" checked={true} icon="0" w="10" h="8" />
                                </PuppyCardMainInfoItem>
                                <PuppyCardMainInfoItem
                                    fieldName="Walked?"
                                    fieldNameWidth="130">
                                    <CheckBox label="no" labelActive="yes" checked={true} icon="0" w="10" h="8" />
                                </PuppyCardMainInfoItem>
                                <PuppyCardMainInfoItem
                                    fieldName="Weaned?"
                                    fieldNameWidth="130">
                                    <CheckBox label="no" labelActive="yes" checked={true} icon="0" w="10" h="8" />
                                </PuppyCardMainInfoItem>
                                <PuppyCardMainInfoItem
                                    fieldName="Solid food intro?"
                                    fieldNameWidth="130">
                                    <CheckBox label="no" labelActive="yes" checked={true} icon="0" w="10" h="8" />
                                </PuppyCardMainInfoItem>
                            </PuppyCardMainInfo>
                        </Content>
                    </ContentScroll>
                    <Footer>
                        <FooterItem icon="4" fText="Take photo" w="20" h="15" />
                        <FooterItem icon="2" fText="Sell puppy" w="20" h="20" />
                        <FooterItem icon="1" fText="Calendar" w="20" h="20" eventIcon="true" />
                    </Footer>
                </Wrapper>

        );
    }
}
