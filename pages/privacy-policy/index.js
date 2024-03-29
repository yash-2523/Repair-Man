import { Box, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

export default function Index() {
  const basicStyle = {
    color: 'rgb(89, 89, 89)',
    fontSize: '15px'
  }

  return (
    <>
      <Head>
        <title>Privacy Policy | WaveWork</title>
        <meta name="description" content="Learn about WaveWork' privacy policy regarding the collection, usage, and protection of your personal information." />
        <meta name="description" content="Learn about WaveWork' privacy policy regarding the collection, usage, and protection of your personal information." />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />


      </Head>



      <Box component={"div"} className="mx-auto mb-5 col-lg-8 col-md-10 col-12 px-1 d-flex flex-column" sx={{ marginTop: "85px" }}>
        <Typography variant="h2" component={"h1"} className="mx-auto" sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", md: "3rem" } }}>PRIVACY POLICY</Typography>
        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-3">
          This privacy notice for WaveWork (<strong>&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;</strong>), describes how and why we might collect, store, use, and/or share (<strong>&quot;process&quot;</strong>) your information when you use our services (<strong>&quot;Services&quot;</strong>), such as when you:
        </Typography>
        <ul style={{ ...basicStyle }} className="mt-2 ms-3">
          <li>
            <Typography variant="body1" component={"p"} sx={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }} className="mt-3">
              Download and use our mobile application (WaveWork), or any other application of ours that links to this privacy notice.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component={"p"} sx={{ color: 'rgb(89, 89, 89)', fontSize: '15px' }} className="mt-3">
              Engage with us in other related ways, including any sales, marketing, or events
            </Typography>
          </li>
        </ul>
        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-3">
          <strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at business@acutelabs.in.
        </Typography>

        <Typography variant="h5" component={"h1"} className="mt-3" sx={{ fontWeight: "600" }}>SUMMARY OF KEY POINTS</Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle, fontStyle: "italic", fontWeight: "600" }} className="mt-3">
          This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our <Link href={"#toc"}>table of contents</Link> below to find the section you are looking for.
        </Typography>
        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-3">
          <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about <Link href={"#personalinfo"}>personal information you disclose to us</Link>.
        </Typography>
        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          <strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.
        </Typography>
        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          <strong>Do we receive any information from third parties?</strong> We do not receive any information from third parties.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about <Link href={"#infouse"}>how we process your information</Link>.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about<Link href={"#whoshare"}>when and with whom we share your personal information</Link>.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          <strong>How do we keep your information safe?</strong> We have implemented robust organizational and technical processes and procedures to safeguard your personal information. Learn more about<Link href={"#infosafe"}>how we keep your information safe</Link>.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about<Link href={"#privacyrights"}>your privacy rights</Link>.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a <Link href={"https://app.termly.io/notify/5f35cbde-e468-42e3-b002-95c705b6dde5"}>data subject access request</Link>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          Want to learn more about what we do with any information we collect? <Link href={"#toc"}>Review the privacy notice in full</Link>.
        </Typography>

        <Typography variant="h5" component={"h1"} className="mt-3" sx={{ fontWeight: "600", scrollMargin: "5rem" }} id="toc">TABLE OF CONTENTS</Typography>

        <Box component={"div"} className="d-flex flex-column mt-4">
          <Link href={"#infocollect"}>1. WHAT INFORMATION DO WE COLLECT?</Link>
          <Link href={"#infouse"}>2. HOW DO WE PROCESS YOUR INFORMATION?</Link>
          <Link href={"#whoshare"}>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</Link>
          <Link href={"#cookies"}>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</Link>
          <Link href={"#inforetain"}>5. HOW LONG DO WE KEEP YOUR INFORMATION?</Link>
          <Link href={"#infosafe"}>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</Link>
          <Link href={"#infominors"}>7. DO WE COLLECT INFORMATION FROM MINORS?</Link>
          <Link href={"#privacyrights"}>8. WHAT ARE YOUR PRIVACY RIGHTS?</Link>
          <Link href={"#DNT"}>9. CONTROLS FOR DO-NOT-TRACK FEATURES</Link>
          <Link href={"#carsidents"}>10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</Link>
          <Link href={"#policyupdates"}>11. DO WE MAKE UPDATES TO THIS NOTICE?</Link>
          <Link href={"#contact"}>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Link>
          <Link href={"#request"}>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</Link>
        </Box>

        <Typography variant="h5" component={"h1"} className="mt-5" sx={{ fontWeight: "600", scrollMargin: "5rem" }} id="infocollect">1. WHAT INFORMATION DO WE COLLECT?</Typography>
        <Typography variant="h6" component={"h3"} className="mt-3" sx={{ fontWeight: "600", scrollMargin: "5rem" }} id="personalinfo">Personal information you disclose to us</Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          <strong>In Short:</strong> We collect personal information that you provide to us.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
        </Typography>

        <ul style={{ ...basicStyle }} className="ms-3">
          <li>names</li>
          <li>phone numbers</li>
          <li>contact preferences</li>
          <li>location</li>
          <li>address</li>
          <li>profile image</li>
        </ul>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          <strong>Sensitive Information.</strong> We do not process sensitive information.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          <strong>Application Data.</strong> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:
        </Typography>

        <ul style={{ ...basicStyle }} className="ms-3">
          <li className="mt-3"><i>Geolocation Information.</i> We may request access or permission to track location-based information from your mobile device, either continuously or while you are using our mobile application(s), to provide certain location-based services. If you wish to change our access or permissions, you may do so in your device&apos;s settings.</li>
          <li className="mt-3"><i>Mobile Device Data.</i> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device’s operating system or platform, the type of mobile device you use, your mobile device’s unique device ID, and information about the features of our application(s) you accessed.</li>
          <li className="mt-3"><i>Push Notifications.</i> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device&apos;s settings.</li>
        </ul>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.</Typography>
        <Typography variant="body1" component={'p'} sx={{ ...basicStyle }} className="mt-4">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</Typography>


        <Typography variant="h5" component={"h1"} className="mt-5" sx={{ fontWeight: "600", scrollMargin: "5rem" }} id="infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          <strong><i>In Short.</i></strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          <strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong>
        </Typography>

        <ul style={{ ...basicStyle }} className="ms-3">
          <li className="mt-3"><strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
          <li className="mt-3"><strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</li>
          <li className="mt-3"><strong>To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
          <li className="mt-3"><strong>To fulfill and manage your orders.</strong> We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.</li>
          <li className="mt-3"><strong>To enable user-to-user communications.</strong> We may process your information if you choose to use any of our offerings that allow for communication with another user.</li>
          <li className="mt-3"><strong>To evaluate and improve our Services, products, marketing, and your experience.</strong> We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience.</li>
          <li className="mt-3"><strong>To identify usage trends.</strong> We may process information about how you use our Services to better understand how they are being used so we can improve them.</li>

        </ul>

        <Typography variant="h5" component={"h1"} className="mt-5" sx={{ fontWeight: "600", scrollMargin: "5rem" }} id="infouse">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          <strong><i>In Short.</i></strong> We may share information in specific situations described in this section and/or with the following third parties.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          We may need to share your personal information in the following situations:
        </Typography>

        <ul style={{ ...basicStyle }} className="ms-3">
          <li className="mt-3"><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          <li className="mt-3"><strong>When we use Google Maps Platform APIs.</strong>  We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places API). We obtain and store on your device (&quot;cache&quot;) your location. You may revoke your consent anytime by contacting us at the contact details provided at the end of this document.</li>
        </ul>

        <Typography variant="h5" component={"h1"} className="mt-5" sx={{ fontWeight: "600", scrollMargin: "5rem" }} id="cookies">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          <strong><i>In Short.</i></strong> We may use cookies and other tracking technologies to collect and store your information.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
        </Typography>

        <Typography variant="h5" component={"h1"} className="mt-5" sx={{ fontWeight: "600", scrollMargin: "5rem" }} id="inforetain">5. HOW LONG DO WE KEEP YOUR INFORMATION?</Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          <strong><i>In Short.</i></strong> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
        </Typography>

        <Typography variant="h5" component={"h1"} className="mt-5" sx={{ fontWeight: "600", scrollMargin: "5rem" }} id="infosafe">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          <strong><i>In Short.</i></strong> We aim to protect your personal information through a system of organizational and technical security measures.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          We have implemented robust organizational and technical processes and procedures to safeguard your personal information. You should only access the Services within a secure environment.
        </Typography>

        <Typography variant="h5" component={"h1"} className="mt-5" sx={{ fontWeight: "600", scrollMargin: "5rem" }} id="infominors">7. DO WE COLLECT INFORMATION FROM MINORS?</Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          <strong><i>In Short.</i></strong> We do not knowingly collect data from or market to children under 18 years of age.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at business@acutelabs.in.
        </Typography>

        <Typography variant="h5" component={"h1"} className="mt-5" sx={{ fontWeight: "600", scrollMargin: "5rem" }} id="privacyrights">8. WHAT ARE YOUR PRIVACY RIGHTS?</Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          <strong><i>In Short.</i></strong> You may review, change, or terminate your account at any time.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your <Link href={"https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"}>Member State data protection authority</Link> or <Link href={"https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/"}>UK data protection authority</Link>.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          If you are located in Switzerland, you may contact the <Link href={"https://www.edoeb.admin.ch/edoeb/en/home.html"}>Federal Data Protection and Information Commissioner</Link>.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          <strong><u>Withdrawing your consent:</u></strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section <Link href={"#contact"}>&quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot;</Link> below.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
        </Typography>

        <Typography variant="h6" component={"h2"} className="mt-4" sx={{ fontWeight: "600" }}>Account Information</Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          If you would at any time like to review or change the information in your account or terminate your account, you can:
        </Typography>

        <ul style={{ ...basicStyle }} className="ms-3">
          <li>Contact us using the contact information provided.</li>
          <li>dhruv.kabariya@acutelabs.in</li>
        </ul>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</Typography>
        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">If you have questions or comments about your privacy rights, you may email us at business@acutelabs.in.</Typography>


        <Typography variant="h5" component={"h1"} className="mt-5" sx={{ fontWeight: "600", scrollMargin: "5rem" }} id="DNT">9. CONTROLS FOR DO-NOT-TRACK FEATURES</Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
        </Typography>

        <Typography variant="h5" component={"h1"} className="mt-5" sx={{ fontWeight: "600", scrollMargin: "5rem" }} id="carsidents">10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          <strong><i>In Short.</i></strong> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          California Civil Code Section 1798.83, also known as the &quot;Shine The Light&quot; law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).
        </Typography>

        <Typography variant="h5" component={"h1"} className="mt-5" sx={{ fontWeight: "600", scrollMargin: "5rem" }} id="policyupdates">11. DO WE MAKE UPDATES TO THIS NOTICE?</Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          <strong><i>In Short.</i></strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          We may update this privacy notice from time to time. The updated version will be indicated by an updated &quot;Revised&quot; date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
        </Typography>

        <Typography variant="h5" component={"h1"} className="mt-5" sx={{ fontWeight: "600", scrollMargin: "5rem" }} id="contact">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          If you have questions or comments about this notice, you may email us at business@acutelabs.in or contact us by post at:
        </Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">WaveWork</Typography>
        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }}>Vaibhav Bunglows</Typography>
        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }}>Memnagar</Typography>
        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }}>Ahmedabad, Gujarat 395004</Typography>
        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }}>India</Typography>

        <Typography variant="h5" component={"h1"} className="mt-5" sx={{ fontWeight: "600", scrollMargin: "5rem" }} id="request">13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</Typography>

        <Typography variant="body1" component={"p"} sx={{ ...basicStyle }} className="mt-4">
          You have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please fill out and submit a <Link href={"https://app.termly.io/notify/5f35cbde-e468-42e3-b002-95c705b6dde5"}>data subject access request</Link>.
        </Typography>
      </Box>
    </>
  );
};