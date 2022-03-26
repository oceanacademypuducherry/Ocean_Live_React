import "./App.css";
import { HomeLandingPage } from "./Components/Home/HomeLandingPage/HomeLandingPage";
import { ContactUs } from "./Components/ContactUs/ContactUs";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import { Services } from "./Components/Services/Services";
import { OnlineCourses } from "./Components/Courses/OnlineCourses/OnlineCourses";
import { OnlineViewDetail } from "./Components/Courses/OnlineViewDetail/OnlineViewDetail";
import { OfflineCourses } from "./Components/Courses/OfflineCourses/OfflineCourses";
import { Career } from "./Components/Career/Career";
import { LoggedInLandingPage } from "./Components/LoggedInScreens/LoggedInLandingPage/LoggedInLandingPage";
import { Notification } from "./Components/LoggedInScreens/Notification/Notification";
import { EditProfile } from "./Components/LoggedInScreens/EditProfile/EditProfile";
import { MyCoursesMoreInfo } from "./Components/LoggedInScreens/MyCoursesMoreInfo/MyCoursesMoreInfo";
import { PurchaseHistory } from "./Components/LoggedInScreens/PurchaseHistory/PurchaseHistory";
import { Login } from "./Components/Login/Login";
import { LoginOTP } from "./Components/LoginOTP/LoginOTP";
import { Register } from "./Components/Register/Register";
import { ZoomSchedule } from "./Components/LoggedInScreens/ZoomSchedule/ZoomSchedule";
import { MyCourseCard } from "./Components/LoggedInScreens/CourseCard/CourseCard";
import { AllCourses } from "./Components/LoggedInScreens/AllCourses/AllCourses";
import { CourseViewDetails } from "./Components/LoggedInScreens/CourseViewDetails/CourseViewDetails";
import { Certificate } from "./Components/LoggedInScreens/Certificate/Certificate";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomeLandingPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/onlinecourses" element={<OnlineCourses />} />
        <Route
          path="/onlinecourses/viewdetails/:courseId/"
          element={<OnlineViewDetail />}
        />
        <Route path="/offlinecourses" element={<OfflineCourses />} />
        <Route path="/career" element={<Career />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginotp" element={<LoginOTP />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Routes>
        <Route path="/dashboard" element={<LoggedInLandingPage />}>
          <Route path="zoom" element={<ZoomSchedule />} />
          <Route path="allcourses" element={<AllCourses />} />
          <Route path="mycourses" element={<MyCourseCard />} />
        </Route>
        <Route path="/dashboard/notification" element={<Notification />} />
        <Route path="/dashboard/editprofile" element={<EditProfile />} />
        <Route path="/dashboard/viewdetails" element={<CourseViewDetails />} />
        <Route
          path="/dashboard/mycoursemoreinfo"
          element={<MyCoursesMoreInfo />}
        />
        <Route
          path="/dashboard/purchasehistory"
          element={<PurchaseHistory />}
        />
        <Route path="/dashboard/certificate" element={<Certificate />} />
      </Routes>
    </>
  );
}

export default App;
