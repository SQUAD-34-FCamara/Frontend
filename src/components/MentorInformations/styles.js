import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    max-width: 100vw;
    width: 100%;
    background-color: var(--background);
    overflow: hidden;

   
    

`

export const MentorDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   img {
       border-radius: 50%;
       width: 10rem;
       height: 10rem;
       object-fit:cover;
   }
   h3 {
       margin-top: 1rem;
   }
   .presentation{
       align-self: flex-start;
       font-size: 0.7rem;
       font-weight: bold;
       margin-top: 0.5rem;
   }
   .tasks{
       display: flex;
       margin-top: 1rem;
       align-items: center;
       gap: 0.5rem;
       justify-content: space-between;
       flex-direction: row;
       .item-tasks{
           padding: 0.5rem;
           background-color:  #FE662E;
           border-radius: 10%;
           text-transform: uppercase;
           font-weight: bold;
           color: white;
       }
       
   }

   @media (min-width: 768px) {
       img{
           height: 15rem;
           width: 15rem;
       }
    }

   

`

export const MentorTimer = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;



    .hour{
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        align-items: center;
        select{
            align-items: center;
            background-color:#FEBBA2;
            border-radius: 0.2rem;
            color: #B93200;
            font-weight: bold;
            padding: 1rem;
            width: 40vh;
            border: none;
        }
    }
    #mentor-hour{
        display: flex;
        gap:0.5rem;
        flex-direction: column;
        width: 40vh;
        margin-top: 1rem;
        font-weight: bold;
        color: #B93200;
    

        .submit{
            width: 20vh;
            margin-top: 2rem;
            align-self: center;
            background-color: #fe4400;
            border: none;
            padding: 1rem;
            border-radius: 5px;
            text-transform: uppercase;
            color: white;
            font-weight: bold;
            letter-spacing: 0.1rem;

            :hover{
                background-color: #B93200;
            }
        }
    }

    @media (max-width: 344px) {
        #mentor-hour{
            margin-left: 1rem;
            width: 30vh;
        }
        .hour{
            select{
            margin-left: 1rem;
            width: 30vh;
        }

        }
        }
    
    @media (min-width: 768px){
        #mentor-hour{
            //margin-left: 1rem;
            width: 50vh;
        }
        .hour{
            select{
            //margin-left: 1rem;
            width: 50vh;
        }

        }
    }


`