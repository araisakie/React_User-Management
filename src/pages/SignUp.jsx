import styled from "styled-components";

import { Button } from "../component/atoms/button/Button";
import { SecondaryButton } from "../component/atoms/button/SecondaryButton"

export const SignUp = () => {
    return (
        <SMain>
            <SH2>SIGN UP</SH2>
            <div>
                <div>
                    <SLabel>名前</SLabel>
                    <SInput type="text" name="name" id="name" value="" placeholder="名前を入力してください" />
                </div>
                <div>
                    <SLabel>メールアドレス</SLabel>
                    <SInput type="text" name="name" id="name" value="" placeholder="メールアドレスを入力してください" />
                </div>
                <div>
                    <SLabel>年齢</SLabel>
                    <SInput type="number" name="name" id="name" value="" placeholder="年齢を入力してください" />
                </div>
                <div>
                    <SLabel>電話番号</SLabel>
                    <SInput type="number" name="name" id="name" value="" placeholder="電話番号を入力してください" />
                </div>
                <SecondaryButton>保存</SecondaryButton>
                <Button>キャンセル</Button>
            </div>
        </SMain>
    )
}

const SMain = styled.div`
    text-align: center;
`
const SH2 = styled.h2`
    color: #DAA520;
    font-weight: bold;
    font-size: 40px;
    text-shadow: 5px 3px 1px #FFD700; 
`

const SLabel = styled.label`
    width: 200px;
    margin-bottom: 20px;
    display: inline-block;
`

const SInput = styled.input`
    width: 300px;
    padding: 4px 10px;
    margin: 5px;
`


