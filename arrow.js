// no argument no return
var votingEligibility = () =>
    {
        height=4
                if(height>=5)
        {
            console.log("   Elgibile");
    
        }
        else{
            console.log("Not Eligible");
        }
    }
    votingEligibility()
    //argument no return
    var votingEligibility = (a) =>
    {
                if(height>=5)
        {
            console.log("   Elgibile");
    
        }
        else{
            console.log("Not Eligible");
        }
    }
    votingEligibility(4)
    //no argument return type
    var votingEligibility = () =>
        {
            height=7
                    if(height>=5)
            {
                return ("   Elgibile");
        
            }
            else{
                return ("Not Eligible");
            }
        }
        console.log(votingEligibility())
    //argument return 
    var votingEligibility = (a) =>
    {
       
        if(height>=5)
        {
                return("Eligible");
        }
        else
        {
            return ("Not Eligible");
        }
    }
    console.log(votingEligibility(5))