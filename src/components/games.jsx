import {Card, Col} from 'react-bootstrap';


function gamescards(cards) {
    return (
        <Col sm='6' lg ='4' xl ='3' className='mb-3'>
            <Card>
                <Card.Header className='text-center font-weight-bold'>
                    <span>{cards.name}</span>
                </Card.Header>
                <Card.Body className='p-0'>
                    <img src={cards.img} alt={cards.name} className='w-100'></img>
                </Card.Body>
            </Card>
        </Col>
    );

}

export default gamescards;