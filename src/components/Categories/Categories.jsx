import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import {
    Header,
    Container,
    Row,
    Column,
    Profile,
    Home
} from '../../components';

import CategoriesStyles from './CategoriesStyles';

const useStyles = makeStyles(CategoriesStyles);


const Categories = () => {
    const classes = useStyles();

    return (
        <>
            {/*<Header />*/}
            <Container maxWidth={false}>
                <Row>
                    <Column className={classes.content}>
                        {/*<Home />*/}
                        {/*<Profile />*/}
                    </Column>
                </Row>
            </Container>
        </>
    );
};

export default Categories;
