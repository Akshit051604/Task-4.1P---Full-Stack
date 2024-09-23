import React from 'react';
import { Divider, Image, CardHeader, CardDescription, CardContent, Card, Icon, Container, Button } from 'semantic-ui-react';
import tutorial1 from './Images/tutotial1.jpg';
import tutorial2 from './Images/tutorial2.jpg';
import tutorial3 from './Images/tutorial3.jpg';
const Tutorial = () => {
    return (
        <Container>
            <Divider />
            <h2 style={{ textAlign: 'center', color: 'Grey', fontWeight: 'bold' }}> Demon Slayer | Hashiras </h2>
            <Divider />
            <Card.Group centered>
                <Card color='green'>
                    <Image src={tutorial1} wrapped ui={false} />
                    <CardContent>
                        <CardHeader> Kyojuro Rangoku </CardHeader>
                        <CardDescription>
                            He is a Flame Hashira.
                            Using Flame Breathing Style!
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
                            Koyoharu Gotouge
                        </a>
                    </CardContent>
                </Card>
                <Card color='blue'>
                    <Image src={tutorial2} wrapped ui={false} />
                    <CardContent>
                        <CardHeader> Gyomei Himejima </CardHeader>
                        <CardDescription>
                            He is a Stone Hashira.
                            Strongest Hashira currently!
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
                            Koyoharu Gotouge
                        </a>
                    </CardContent>
                </Card>
                <Card color='red'>
                    <Image src={tutorial3} wrapped ui={false} />
                    <CardContent>
                        <CardHeader> Tomioka Giyu </CardHeader>
                        <CardDescription>
                            He is a Water Hashira.
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
                            Koyoharu Gotouge
                        </a>
                    </CardContent>
                </Card>
            </Card.Group>
            <Button color='purple' style={{ marginTop: '20px' }}>More Hashiras</Button>
        </Container>
    )
}

export default Tutorial
