import { Container } from "react-bootstrap";

// Components.
import ProfileDetail from "../../components/ProfileDetail";
import TransactionHistory from "../../components/TransactionHistory";

const index = () => {
    return (
        <>
            <Container style={{marginTop: 73}}>
                <div style={{display: 'flex'}}>
                    <div style={{flex: 1}}>
                        <ProfileDetail/>
                    </div>
                    <div style={{minWidth: 419}}>
                        <TransactionHistory/>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default index;
