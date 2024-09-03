

    //    todo: activity 1

        // function call
        function DisplayText(){
            console.log("Java");
        }
        DisplayText();

        // syntax
        let a = "1";
        let b = 2;
            if( a < b && a > b ){
                console.log( "statement: " + true);
            }else{
                console.log("Statement: " + false);
            }

        // const
        const c = 1;
        const d = 2;
        const Total = c + d;
        console.log("Total: " + Total );

        // var
        var Text = "John Doe";
        console.log(Text);

        function Average(){
            let name = document.getElementById('name').value;
            let IP1 = document.getElementById('IP1').value;
            let IM1 = document.getElementById('IM1').value;
            let OOP = document.getElementById('OOP').value;
            let EDP = document.getElementById('EDP').value;
            let HC2 = document.getElementById('HC2').value;
            
            let AddingOFGrades = Number(IP1) + Number(IM1)  +Number(OOP) + Number(EDP) + Number(HC2);
            let Average = AddingOFGrades / 5;

            alert( "name: " + name + "\n" + "IP1: " + IP1 + "\n" + "IM1: " + IM1 + "\n" + "OOP: " + OOP + "\n" + "EDP: " + EDP + "\n" + "HC2: " + HC2 + "\n" + "Average: " + Average );
            
            console.log(Average);
        }