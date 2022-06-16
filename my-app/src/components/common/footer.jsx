import React from 'react';
// import { navigationViewLegalPages } from './../../Shared/WebAnalytics.js';
// TODO what about the analytics events
import appStoreIcon from '../../static/images/download_app_store.png';
import googlePlayIcon from '../../static/images/download_google_play.png';
import { FOOTER_LINKS, SOCIAL_LINKS } from '../../static/constants';
// import './Footer.css';
import { map } from 'lodash';
import { Max75Div } from '../atoms/SizedDiv';
import { Header5, Small2 } from '../atoms/Typography';
import { FlexDivSpaceBetween } from '../atoms/FlexDiv';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        }

        this.relevantLinksView = this.relevantLinksView.bind(this);
        this.linksInGrids = this.linksInGrids.bind(this);
        this.linksInExpandable = this.linksInExpandable.bind(this);
        this.appsAndSocialLinks = this.appsAndSocialLinks.bind(this);
        this.socialLinksAndCopy = this.socialLinksAndCopy.bind(this);
        this.getAppsSection = this.getAppsSection.bind(this);
    }
    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({ width: window.innerWidth })
        });
    }
    relevantLinksView() {
        if (this.state.width > 1000) {
            return this.linksInGrids();
        }
        return this.linksInExpandable();
    }
    linksInGrids() {
        return (<div className='pb-32 border-bottom-transparent'>
            <FlexDivSpaceBetween>
                {map(FOOTER_LINKS, (colObj, ind) => (<div key={`footer-col-${ind}`}>
                    <div className=' mb-16'><Header5>{colObj.title}</Header5></div>
                    {map(colObj.linksList, (lnk, it) => (<div key={`footer-link-${ind}-${it}`} className="mb-16">
                        <a href={lnk.linkAddress}>
                            <Small2>{lnk.linkText}</Small2></a>
                    </div>))}
                </div>))}
            </FlexDivSpaceBetween>
        </div>)
    }
    linksInExpandable() {
        return (<div></div>)
    }
    appsAndSocialLinks() {
        return (<div className='row pt-32'>
            <div className='col-xs-12 col-sm-2'>
                {this.getAppsSection()}
            </div>
            <div className='col-xs-12 col-sm-10'>
                {this.socialLinksAndCopy()}
            </div>
        </div>)
    }
    socialLinksAndCopy() {
        return (<>
            <div className='mb-20'>
                {map(SOCIAL_LINKS, (lnk, itr) => (<a key={`social-link-${itr}`} href={lnk.linkAddress} className="mr-16">
                    <img src={lnk.imgSrc} alt={`Social-link-${itr}`} />
                </a>))}
            </div>
            <div className='max-width-50 size-12-20'>
                Copyright 2021, Soothe Inc. Please read our <a href="https://www.soothe.com/terms-and-conditions/"
                // onClick={() => navigationViewLegalPages()}
                >
                    Terms and Conditions</a> and <a href="https://www.soothe.com/privacy-policy/"
                    // onClick={() => navigationViewLegalPages()}
                    > Privacy Policy</a> for more information.
            </div>
        </>)
    }
    getAppsSection() {
        return (<>
            <div className='mb-16'>
                <a href="https://apps.apple.com/us/app/soothe-in-home-massage/id811054908?ls=1">
                    <img src={appStoreIcon} alt="Apple store" />
                </a>
            </div>
            <div>
                <a href="https://play.google.com/store/apps/details?id=com.soothe.client&hl=en_US">
                    <img src={googlePlayIcon} alt="Google play store" />
                </a>
            </div>
        </>)
    }
    render() {
        return (<footer className='background-darkest-blue content-primary-white'>
            <Max75Div>
                {this.relevantLinksView()}
                {this.appsAndSocialLinks()}
            </Max75Div>
        </footer>)
    }
}