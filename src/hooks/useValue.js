import { useState } from "react";

export default function useValueCalculater() {
    const [valueState, setValueState] = useState(0);
    const [numberInstallment, setNumberInstallment] = useState(0);

    const data = (arrayProduct, arrayInstallmentValue) => {
        let totalValue = 0;
        console.log(arrayInstallmentValue[0]);

        arrayProduct.forEach((element) => {
            totalValue += element.unitaryValue * element.amount;
        });

        let valueInstallment = arrayInstallmentValue[0].intallmentValue;

        let numberInstallment = totalValue / valueInstallment;

        const booleantTest = totalValue === numberInstallment;

        const result = {
            totalValue,
            numberInstallment,
            valueInstallment,
            booleantTest,
        };

        setNumberInstallment(numberInstallment);
        setValueState(result);
    };

    return [valueState, data];
}
