import React from 'react'
import { Divider, Image, CardHeader, CardDescription, CardContent, Card, Icon, CardGroup, Container, Button } from 'semantic-ui-react';
import article1 from './Images/article1.jpg';
import Article2 from './Images/article2.jpg';
import article3 from './Images/article3.jpg';
const Articles = () => {
    return (
        <Container><Divider />
            <h2 style={{ textAlign: 'center', color: 'Grey', fontWeight: 'bold' }}> Haikyu | Karasuno High </h2>
            <Divider />
            <CardGroup centered>
                <Card color='green'>
                    <Image src={article1} wrapped ui={false} />
                    <CardContent>
                        <CardHeader> Kei Tsukishima</CardHeader>
                        <CardDescription>
                            He is a first-year at Karasuno High.
                            Starting Middle Block on boys' Volleyball team.
                        </CardDescription>
                    </CardContent>
                    <CardContent extra>
                        <a>
                            <Icon name='star' />
                            4.7
                        </a>
                    </CardContent>
                    <CardContent extra>
                        <a>
                            <Icon name='user' />
                            Haruichi Furudate
                        </a>
                    </CardContent>
                </Card>
                <Card color='blue'>
                    <Image src={Article2} wrapped ui={false} />
                    <CardContent>
                        <CardHeader> Hinata Shoyou</CardHeader>
                        <CardDescription>
                            He is a first-year at Karasuno High.
                            Starting Middle Block on boys' Volleyball team.
                            Also known as Ninja Shoyo!
                        </CardDescription>
                    </CardContent>
                    <CardContent extra>
                        <a>
                            <Icon name='star' />
                            4.9
                        </a>
                    </CardContent>
                    <CardContent extra>
                        <a>
                            <Icon name='user' />
                            Haruichi Furudate
                        </a>
                    </CardContent>
                </Card>
                <Card color='red'>
                    <Image src={article3} wrapped ui={false} />
                    <CardContent>
                        <CardHeader> Tobio Kageyama </CardHeader>
                        <CardDescription>
                            He is a first-year at Karasuno High.
                            Starting Settler on boys' Volleyball team.
                        </CardDescription>
                    </CardContent>
                    <CardContent extra>
                        <a>
                            <Icon name='star' />
                            5.0
                        </a>
                    </CardContent>
                    <CardContent extra>
                        <a>
                            <Icon name='user' />
                            Haruichi Furudate
                        </a>
                    </CardContent>
                </Card>
            </CardGroup>
            <Button color='purple' style={{ marginTop: '20px' }}>More Players</Button>
        </Container>
    )
}

export default Articles
