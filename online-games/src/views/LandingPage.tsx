import CustomButton from "../components/CustomButton";
import { messagesOnScreen } from "../helpers/constant";
import "../App.css"

function LandingPage() {
    return (<div className="flex gap-10 center">        
        <div className="">
        <h1 className="font-bold text-7xl text-start">{messagesOnScreen.welcomeMsg}</h1>
        <div className="flex w-2/4 mt-8">
            <CustomButton action={() =>{}} content={messagesOnScreen.registerBtnMsg} isActive={true} width="w-full"></CustomButton>
            <div className="m-4"></div>
            <CustomButton action={() =>{}} content={messagesOnScreen.loginBtnMsg} isActive={false} width="w-full"></CustomButton>
        </div>
        </div>
        <img src="src/assets/ticTacToeLogo.png" />
    </div>
   
    );
}

export default LandingPage;