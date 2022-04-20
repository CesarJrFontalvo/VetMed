import React, { Component } from 'react';
import Portal from './Portal';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
export default class VentanaModal extends Component {
    render() {
        const { children, toggle, active } = this.props;

        return (
            <Portal>
                {active && (
                    <div style={styles.wrapper}>
                        <div>
                            <Modal
                                basic
                                size='small'
                                trigger={<Button>Basic Modal</Button>}
                            >
                                <Header icon>
                                    <Icon name='archive' />
                                    Archive Old Messages
                                </Header>
                                <Modal.Content>
                                    <p>
                                        Your inbox is getting full, would you like us to enable automatic
                                        archiving of old messages?
                                    </p>
                                </Modal.Content>
                                <Modal.Actions>
                                    <Button basic color='red' inverted onClick={toggle}>
                                        <Icon name='remove' /> cerrar
                                    </Button>
                                </Modal.Actions>
                            </Modal>
                            <div>{children}</div>
                        </div>
                    </div>
                )}
            </Portal>
        )
    }
}

const styles ={
    wrapper:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}