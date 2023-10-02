// import { Upload } from "antd"
import "../Dashboard/Dashboard.css"
import AdditionalQuestions from "../components/sections/AdditionalQuestions/AdditionalQuestions"
import PersonalInfo from "../components/sections/PersonalInfo/PersonalInfo"
import Profile from "../components/sections/Profile/Profile"
// import CardSkeleton from "../components/molecules/card/card"
import UploadCard from "../components/sections/Upload/UploadCard"

const Dashboard = () => {
  return (
    <div className="dashCont">
      <UploadCard/>
      <PersonalInfo/>
      <Profile/>
      <AdditionalQuestions/>
      </div>
  )
}

export default Dashboard