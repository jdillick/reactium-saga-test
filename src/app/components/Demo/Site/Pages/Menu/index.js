/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component, Fragment } from 'react';
import Template from 'components/Demo/Site/Template';
import Features from 'components/Demo/Site/Features';

/**
 * -----------------------------------------------------------------------------
 * React Component: Menu
 * -----------------------------------------------------------------------------
 */

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props,
        };
    }

    componentDidMount() {
        if (this.state.hasOwnProperty('mount')) {
            this.state.mount(this);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState(prevState => ({
            ...prevState,
            ...nextProps,
        }));
    }

    render() {
        let { features = {}, title } = this.state;

        return (
            <Template title={title}>
                <main role='main'>
                    <Features {...features} />
                </main>
            </Template>
        );
    }
}

Menu.defaultProps = {
    title: 'Menu | Reactium',
    features: {
        layout: ['col-xs-12 col-md-6', 'col-xs-12 col-md-6'],
        items: [
            {
                backgroundImage: 'url(/assets/images/demo-site/feature-01.png)',
                caption:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
                title: 'Gourmet All Beef Hotdogs',
            },
            {
                backgroundImage: 'url(/assets/images/demo-site/feature-02.png)',
                caption:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
                title: 'Vegan Hotdogs',
            },
            {
                backgroundImage: 'url(/assets/images/demo-site/feature-03.png)',
                caption:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
                title: 'Vegetarian Hotdogs',
            },
            {
                backgroundImage: 'url(/assets/images/demo-site/feature-01.png)',
                caption:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
                title: 'Gourmet All Beef Hotdogs',
            },
            {
                backgroundImage: 'url(/assets/images/demo-site/feature-02.png)',
                caption:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
                title: 'Vegan Hotdogs',
            },
            {
                backgroundImage: 'url(/assets/images/demo-site/feature-03.png)',
                caption:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
                title: 'Vegetarian Hotdogs',
            },
            {
                backgroundImage: 'url(/assets/images/demo-site/feature-01.png)',
                caption:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
                title: 'Gourmet All Beef Hotdogs',
            },
            {
                backgroundImage: 'url(/assets/images/demo-site/feature-02.png)',
                caption:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
                title: 'Vegan Hotdogs',
            },
            {
                backgroundImage: 'url(/assets/images/demo-site/feature-03.png)',
                caption:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
                title: 'Vegetarian Hotdogs',
            },
        ],
    },
};
