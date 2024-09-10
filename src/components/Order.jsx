import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button, Nav, NavItem, NavLink, Card, CardText, CardBody, CardTitle, ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

const sizes = ['Küçük', 'Orta', 'Büyük'];
const hamurOptions = ['Hamur Kalınlığı İnce', 'Hamur Kalınlığı Normal', 'Hamur Kalınlığı Kalın'];
const ingredients = [
    'Pepperoni', 'Domates', 'Biber', 'Sosis', 'Mısır',
    'Sucuk', 'Kanada Jambonu', 'Ananas', 'Tavuk Izgara',
    'Jalepeno', 'Kabak', 'Soğan', 'Sarımsak'
];

export default function Siparis() {
    const [boyut, setBoyut] = useState('');
    const [hamur, setHamur] = useState('');
    const [note, setNote] = useState('');
    const [isim, setisim] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const handleChangeBoyut = (event) => {
        setBoyut(event.target.value);
    };

    const handleChangeHamur = (event) => {
        setHamur(event.target.value);
    };

    const handleChangeNot = (event) => {
        setNote(event.target.value);
    };

    const handleisimChange = (event) => {
        setisim(event.target.value);
    };

    const handleQuantityChange = (amount) => {
        setQuantity((prevQuantity) => Math.max(prevQuantity + amount, 1));
    };

    const handleIngredientChange = (event) => {
        const ingredient = event.target.value;
        setSelectedIngredients((prevSelected) =>
            prevSelected.includes(ingredient)
                ? prevSelected.filter(item => item !== ingredient)
                : [...prevSelected, ingredient]
        );
    };

    return (
        <div>
            <header style={{ backgroundColor: '#CE2829' }}>
                <h1 style={{ color: 'white', fontFamily: '"Londrina Solid", sans-serif' }}>Teknolojik Yemekler</h1>
                <Nav>
                    <NavItem>
                        <NavLink active style={{ color: 'white' }} href="#">
                            Anasayfa
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
                <div className="container-detay" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <div style={{
                        fontSize: '1.4rem',
                        fontWeight: '600',
                    }}>85.50₺</div>
                    <div>4.9</div>
                    <div>(200)</div>
                </div>
                <p>
                    Frontend Dev olarak hala position: absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen genellikle yuvarlak düzeltilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                    <FormGroup tag="fieldset" style={{ flex: 1 }}>
                        <legend>Boyut Seç<span style={{ color: '#CE2829' }}>*</span></legend>
                        {sizes.map((sizeOption, index) => (
                            <FormGroup check key={index}>
                                <Input
                                    name="boyut"
                                    type="radio"
                                    value={sizeOption}
                                    checked={boyut === sizeOption}
                                    onChange={handleChangeBoyut}
                                />
                                <Label check>
                                    {sizeOption}
                                </Label>
                            </FormGroup>
                        ))}
                    </FormGroup>

                    <FormGroup tag="fieldset" style={{ flex: 1 }}>
                        <legend>Hamur Seç<span style={{ color: '#CE2829' }}>*</span></legend>
                        <Input
                            id="hamurSec"
                            name="select"
                            type="select"
                            value={hamur}
                            onChange={handleChangeHamur}
                        >
                            {hamurOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </Input>
                    </FormGroup>
                </div>

                <FormGroup>
                    <Label for="ingredients" style={{ fontSize: '1.1rem' }}>Ek Malzemeler</Label>
                    {ingredients.map((ingredient, index) => (
                        <FormGroup check key={index} style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <Input
                                type="checkbox"
                                value={ingredient}
                                checked={selectedIngredients.includes(ingredient)}
                                onChange={handleIngredientChange}
                            />
                            <Label check>
                                {ingredient}
                            </Label>
                        </FormGroup>
                    ))}
                </FormGroup>

                <FormGroup>
                    <Label for="siparisnotu">Sipariş Notu</Label>
                    <Input
                        id="siparisnotu"
                        name="text"
                        placeholder="Siparişine eklemek istediğin bir not var mı?"
                        type="textarea"
                        value={note}
                        onChange={handleChangeNot}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="isim">İsminiz</Label>
                    <Input
                        id="isim"
                        name="name"
                        placeholder="En az 3 karakter"
                        type="text"
                        value={isim}
                        onChange={handleisimChange}
                    />
                </FormGroup>

                <ButtonGroup>
                    <Button
                        style={{
                            backgroundColor: '#FDC913',
                            border: 'none',
                            color: '#292929',
                            fontWeight: '400',
                            width: 'auto'
                        }}
                        onClick={() => handleQuantityChange(-1)}
                    >
                        -
                    </Button>
                    <span style={{ padding: '0 1rem' }}>{quantity}</span>
                    <Button
                        style={{
                            backgroundColor: '#FDC913',
                            border: 'none',
                            color: '#292929',
                            fontWeight: '400',
                            width: 'auto'
                        }}
                        onClick={() => handleQuantityChange(1)}
                    >
                        +
                    </Button>
                </ButtonGroup>

                <Card className="my-2" style={{ width: '18rem' }}>
                    <CardBody>
                        <CardTitle tag="h5">Sipariş Toplamı</CardTitle>
                        <CardText style={{ fontWeight: '500' }}>Seçimler</CardText>
                        <CardText style={{ color: '#CE2829', fontWeight: '500' }}>
                            {`Toplam: ${quantity * 85.50}₺`}
                        </CardText>
                        <div className="row">
                            <div className="col-12">
                                <Button
                                    className="w-100"
                                    style={{
                                        backgroundColor: '#FDC913',
                                        border: 'none',
                                        color: '#292929',
                                        fontWeight: '400',
                                        width: '100%'
                                    }}
                                >
                                    <Link to="/success" style={{ textDecoration: 'none', color: '#292929' }}>
                                        SİPARİŞ VER
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Form>
        </div>
    );
}
