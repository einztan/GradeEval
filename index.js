    // declarations
    var SideBarBTN = document.getElementById('SideBarBTN');
    var SideBarBtnICON = document.getElementById("SideBarBtnICON");

    var DefaultState = "";
    var ClickedState = "";

    let click = 0;

    var EvalPANEL = document.getElementById('EvalPANEL');
    var PanelContent = document.getElementById('PanelContent');

    var ProfileIMG = document.getElementById('ProfileIMG');
    var ChangeImgBTN = document.getElementById('ChangeImgBTN');

    var ProfileInfo = document.getElementsByClassName('ProfileInfo');
    var StudentCourseYear = document.getElementById('StudentCourseYear');

    var EvaluationBTN = document.getElementById('EvaluationBTN');
    

    // functions
    function EvaluationOfGrades(){
        let FirstName = document.getElementById('FirstName').value;
        let LastName  = document.getElementById('LastName').value;

        let CourseANDYear = StudentCourseYear.value;

        let Subject1 = document.getElementById('Subject1').value;
        let Subject1Grade = document.getElementById('Subject1Grade').value;

        let Subject2 = document.getElementById('Subject2').value;
        let Subject2Grade = document.getElementById('Subject2Grade').value;

        let Subject3 = document.getElementById('Subject3').value;
        let Subject3Grade = document.getElementById('Subject3Grade').value;

        let Subject4 = document.getElementById('Subject4').value;
        let Subject4Grade = document.getElementById('Subject4Grade').value;

        let Subject5 = document.getElementById('Subject5').value;
        let Subject5Grade = document.getElementById('Subject5Grade').value;

        let AddingOFSubjects = Number(Subject1Grade) + Number(Subject2Grade) + Number(Subject3Grade) + Number(Subject4Grade) + Number(Subject5Grade);
        let Evaluation = AddingOFSubjects / 5;
        
        let Fullname = FirstName + " " + LastName;

        let AverageText = document.getElementById('AverageText');
        AverageText.textContent = Evaluation;

        console.log("Name: " + Fullname + "\n" + "Course: " + CourseANDYear + "\n" + Subject1 + ":" + Subject1Grade + "\n" + Subject2 + ":" + Subject2Grade + "\n" + Subject3 + ":" + Subject3Grade + "\n" + Subject4 + ":" + Subject4Grade + "\n" + Subject5 + ":" + Subject5Grade + "\n" + "Average: " + Evaluation);
        
        alert("Name: " + Fullname + "\n" + "Course: " + CourseANDYear + "\n" + Subject1 + ":" + Subject1Grade + "\n" + Subject2 + ":" + Subject2Grade + "\n" + Subject3 + ":" + Subject3Grade + "\n" + Subject4 + ":" + Subject4Grade + "\n" + Subject5 + ":" + Subject5Grade + "\n" + "Average: " + Evaluation); 
    }


    function OnStateProfile(){
        ProfileIMG.style.transition="0.3s ease-in-out";
        ProfileIMG.style.border="2px solid #A63B3B";

        ChangeImgBTN.style.transition="0.3s ease-in-out";
        ChangeImgBTN.style.border="1px solid #A63B3B";

        for(var i=0; i < ProfileInfo.length; i++){
            ProfileInfo[i].style.transition="0.3s ease-in-out";
            ProfileInfo[i].style.borderBottom="1px solid #A63B3B";
            ProfileInfo[i].style.color="#A63B3B";
        }

        StudentCourseYear.style.transition="0.3s ease-in-out";
        StudentCourseYear.style.borderBottom="1px solid #A63B3B";
        StudentCourseYear.style.color="#A63B3B";
    }

    function OffStateProfile(){
        ProfileIMG.style.transition="0.3s ease-in-out";
        ProfileIMG.style.border="2px solid #727070";

        ChangeImgBTN.style.transition="0.3s ease-in-out";
        ChangeImgBTN.style.border="1px solid #727070";

        for(var i=0; i < ProfileInfo.length; i++){
            ProfileInfo[i].style.transition="0.3s ease-in-out";
            ProfileInfo[i].style.borderBottom="1px solid Black";
            ProfileInfo[i].style.color="Black";
        }

        StudentCourseYear.style.transition="0.3s ease-in-out";
        StudentCourseYear.style.borderBottom="1px solid black";
        StudentCourseYear.style.color="black";
    }

    function ClickedStateSideBar(){
        click += 1;

        DefaultState = "/Icons/menuBlack.png";
        ClickedState = "/Icons/menuRed.png";

        if(click === 1){
            console.log(click);

            SideBarBtnICON.src= ClickedState;
            
            EvalPANEL.style.transition="0.3s ease-in-out";
            EvalPANEL.style.width="200px";

            PanelContent.style.transition="1s ease-in-out";
            PanelContent.style.opacity="100%";

            OnStateProfile();
        }
        else if(click === 2){
            console.log(click);

            click = 0;

            SideBarBtnICON.src= DefaultState;

            EvalPANEL.style.transition="0.3s ease-in-out";
            EvalPANEL.style.width="12px";

            PanelContent.style.transition="0s ease-in-out";
            PanelContent.style.opacity="0%";

            OffStateProfile();
        }
    }

    // callbacks
    SideBarBTN.addEventListener('click',()=>{
        ClickedStateSideBar();
    });

    EvaluationBTN.addEventListener('click',()=>{
        EvaluationOfGrades();
    });