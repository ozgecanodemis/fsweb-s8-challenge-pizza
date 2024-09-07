/* :root {
    --sari: #FDC913;
    --acik - gri: #5F5F5F;
    --koyu - gri: #292929;
    --kirmizi: #CE2829;
    --bej: #FAF7F2;
}
*/

import React from 'react';
import { Form, FormGroup, Input, Label, Button, Nav, NavItem, NavLink, Card, CardText, CardBody, CardTitle, ButtonGroup, } from 'reactstrap';

const malzemeler = [

    'Pepperoni',
    'Domates',
    'Biber',
    'Sosis',
    'Mısır',
    'Sucuk',
    'Kanada Jambonu',
    'Ananas',
    'Tavuk Izgara',
    'Jalepeno',
    'Kabak',
    'Soğan',
    'Sarımsak',
];

export default function Register() {


    return (
        <div>
            <header style={{ backgroundColor: '#CE2829', padding: '1rem' }}>
                <h1 style={{ color: 'white' }}>Teknolojik Yemekler</h1>
                <Nav style={{ color: 'white' }}>
                    <NavItem>
                        <NavLink active style={{ color: 'white' }} href="#">
                            Anasayfa
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: 'white' }} href="#">
                            Seçenekler
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink active style={{ color: 'white' }} href="#">
                            Sipariş Oluştur
                        </NavLink>
                    </NavItem>
                </Nav>
            </header>

            <Form>
                <h2>Position Absolute Acı Pizza</h2>
                <div>85.50₺</div>
                <div>4.9</div>
                <div>(200)</div>
                <p>
                    Frontend Dev olarak hala position: absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen genellikle yuvarlak düzeltilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
                </p>

                <FormGroup tag="fieldset">
                    <legend>Boyut Seç<span style={{ color: ' #CE2829' }}>*</span></legend>
                    {['Küçük', 'Orta', 'Büyük'].map((size, index) => (
                        <FormGroup check key={index}>
                            <Input name="boyut" type="radio" value={size} />
                            <Label check>
                                {size}
                            </Label>
                        </FormGroup>
                    ))}
                </FormGroup>

                <FormGroup>
                    <Label for="hamurSec">Hamur Seç</Label>
                    <Input id="hamurSec" name="select" type="select">
                        <option>Hamur Kalınlığı ince</option>
                        <option>Hamur Kalınlığı orta</option>
                        <option>Hamur Kalınlığı kalın</option>
                    </Input>
                    <h4>Ek Malzemeler</h4>
                </FormGroup>

                {malzemeler.map((topping, index) => (
                    <FormGroup check={index === -1} key={index}>
                        <Input type="checkbox" id={`topping-${index}`} />
                        <Label check htmlFor={`topping-${index}`}>
                            {topping}
                        </Label>
                    </FormGroup>
                ))}

                <FormGroup>
                    <Label for="siparisnotu">Sipariş Notu</Label>
                    <Input id="siparisnotu" name="text"
                        placeholder="Siparişine eklemek istediğin bir not var mı? " type="textarea" />
                </FormGroup>
                <FormGroup>
                    <Label for="isim">
                        İsminiz
                    </Label>
                    <Input
                        id="isim"
                        name="name"
                        placeholder="En az 3 karakter"
                        type="name"
                    />
                </FormGroup>

                <ButtonGroup>
                    <Button style={{
                        backgroundColor: ' #FDC913',
                        border: 'none',
                        color: '#292929',
                        fontWeight: '400',
                        width: ''
                    }}>
                        -
                    </Button>
                    XXX
                    <Button style={{
                        backgroundColor: ' #FDC913',
                        border: 'none',
                        color: '#292929',
                        fontWeight: '400',
                        width: ''
                    }}>
                        +
                    </Button>
                </ButtonGroup>
                <Card className="my-2" style={{ width: '18rem' }}>
                    <CardBody>
                        <CardTitle tag="h5">Sipariş Toplamı</CardTitle>
                        <CardText style={{ fontWeight: '500' }}>Seçimler</CardText>
                        <CardText style={{ color: ' #CE2829', fontWeight: '500' }}>Toplam</CardText>
                        <div className="row">
                            <div className="col-12">
                                <Button className="w-100" style={{
                                    backgroundColor: ' #FDC913',
                                    border: 'none',
                                    color: '#292929',
                                    fontWeight: '400',
                                    width: ''
                                }}>SİPARİŞ VER</Button>
                            </div>
                        </div>
                    </CardBody>
                </Card>

            </Form>
        </div >
    );
}
