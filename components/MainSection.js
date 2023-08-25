import styles from "../styles/MainSection.module.css"
import MainSectionSVG from "../public/mainSection.svg"
import Image from "next/image"
import { Box, Button, Typography } from "@mui/material"

export default function MainSection() {
    return (
        <section id="#" className={`${styles['main-section']}`}>
            <Box component={'div'} sx={{display: "flex", flexDirection: {xs: 'column', md: 'row'}, justifyContent: "center", alignItems: "center", columnGap: {xs: "0rem", md: "1rem"}}}>
                <Box component={'div'} sx={{display: "flex", flexDirection: "column", alignItems: "center", maxWidth: {xs: "95vw", md: "30vw"}}}>
                    <Typography variant="h2" component="h1" className={`${styles['main-section-writing']}`} sx={{alignSelf: "flex-start"}}>
                    Find, Bid, and Get It Done!
                    </Typography>
                    <Typography variant="h6" component="p" className={`${styles['main-section-writing']} mt-3`}>
                    Transforming Household Solutions: Connect with nearby service providers for chores. Compare bids, pick your expert, and accomplish tasks efficiently. Your trusted platform for streamlined home services.
                    </Typography>
                    <Button variant="contained" size="large" className={`mx-auto mt-5 ${styles['main-section-button']}`} disabled>Comming Soon</Button>
                </Box>
                <Box component={'div'} sx={{maxWidth: {xs: "100%", md: "50%"}, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Image src={MainSectionSVG} alt="hero-image" className={`${styles['main-section__image']}`}/>
                </Box>
            </Box>
        </section>
    )
}