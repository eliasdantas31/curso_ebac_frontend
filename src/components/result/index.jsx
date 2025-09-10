import styles from "./Result.module.css";

const Result = ({ imc }) => {
    return (
        <div className={styles.container}>
            <div className={styles.result}>
                {imc ? <h2>Seu IMC é {imc}</h2> : <h2>Digite seus dados para calcular</h2>}
            </div>
            <div className={styles.list}>
                <h3>Veja a interpretação do IMC</h3>
                <table>
                    <tr className={styles.title}>
                        <th>IMC</th>
                        <th>CLASSIFICAÇÃO</th>
                        <th>OBESIDADE (grau)</th>
                    </tr>
                    <tr>
                        <th>MENOR QUE 18,5</th>
                        <th>MAGREZA</th>
                        <th>0</th>
                    </tr>
                    <tr>
                        <th>ENTRE 18,5 E 24,9</th>
                        <th>NORMAL</th>
                        <th>0</th>
                    </tr>
                    <tr>
                        <th>ENTRE 25,0 E 29,9</th>
                        <th>SOBREPESO</th>
                        <th>I</th>
                    </tr>
                    <tr>
                        <th>ENTRE 30,0 E 39,9</th>
                        <th>OBESIDADE</th>
                        <th>II</th>
                    </tr>
                    <tr>
                        <th>MAIOR QUE 40,0</th>
                        <th>OBESIDADE</th>
                        <th>III</th>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Result;