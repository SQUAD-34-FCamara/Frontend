
import foto from '../../Assets/foto-teste.jpg';
import Select from 'react-select';
import React from 'react';

import * as S from './styles';




export default function MentorInformations() {


    return (
        <>
            <S.Container>
                <S.MentorDetail>
                    <img src={foto}></img>
                    <h3>Juliana Almeida</h3>
                    <p>Desenvolvedora front-end</p>
                    <p className='presentation'>Sabe muito sobre:</p>
                    <div className='tasks'>
                        <div className='item-tasks'>HTML</div>
                        <div className='item-tasks'>CSS</div>
                        <div className='item-tasks'>JavaScript</div>
                    </div>


                </S.MentorDetail>
                <S.MentorTimer>
                    <div className='timer'>
                            <div className='hour'>
                                <label for="hour-select">Horários disponíveis:</label>
                                <select
                                    name="hour-select"
                                    id="hour-select"
                                    form="mentor-hour"
                                    className='select-hour'>
                                    <option value="1">15/05/2022 - 10h00</option>
                                    <option value="2">16/05/2022 - 15h00</option>
                                    <option value="3">16/05/2022 - 14h00</option>
                                </select>
                            </div>
                        <form id="mentor-hour">
                            <label for="name">Nome:</label>
                            <input type="text" id="name" name="name"/>
                            <label for="name">Email:</label>
                            <input type="email" id="email" name="email"/>

                            <input type="submit" className='submit'></input>



                        </form>


                    </div>

                </S.MentorTimer>


            </S.Container>
        </>
    );
}