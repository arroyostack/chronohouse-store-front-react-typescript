import { ViewContainer } from '../components/ViewContainer';
import { JumboHeroButton, Jumbotrone, JumbotroneHeroText } from '../components/jumbotrone';

const currentSaleHeroPicture = "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1617215699-dell-xps-13-1617215688.jpg?crop=1xw:1xh;center,top&resize=980:*";

export const Home = () => {
    return (

        <ViewContainer>
            <>
                <Jumbotrone image={ currentSaleHeroPicture }>
                    <JumbotroneHeroText
                        title="Celebrate Black Friday at ChronoHouse"
                        subTitle="This Black Friday ChronoHouse brings you the oportunity to get the new Acer 245 laptop for only $499 with a one year insurance absolutely free."
                    />
                    <JumboHeroButton text="Visit the shop now!" />
                </Jumbotrone>
                <img src="https://cdn.dribbble.com/users/5572011/screenshots/13944413/fwt-black-friday-is-comng.gif" alt="" style={ { height: "200px" } } />

            </>
        </ViewContainer>


    );
};
