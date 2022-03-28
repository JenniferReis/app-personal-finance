import { Grid } from "@material-ui/core";
import { useFinances } from "../../hooks/useFinances";
import { useTransactionFilters } from "../../hooks/useTransactionFilters";
import { defaultFilterValue } from "../../services/constants";
import {
  getTotalBalance,
  getTotalCredit,
  getTotalDebit,
} from "../../services/utils";
import { CSSColor } from "../../theme/types";
import {CustomBox} from "./styles";

function FinanceStatus() {
  const { transactions } = useFinances();
  const { filters } = useTransactionFilters();

  const getFilteredTransactions = () => {
    if (filters.category !== defaultFilterValue) {
      return transactions.filter(
        (transaction) => transaction.category === filters.category
      );
    } else {
      return transactions;
    }
  };

  return (
    <Grid item xs={12} md={3} lg={3} >
      <Grid
        justifyContent="space-between"
        spacing={5}
        container
        direction="column"
      >
        <Grid item>
          <CustomBox
            color={CSSColor.PrimaryLight}           
          >
            <Grid container direction="column" className="status-title" alignItems="center">
              
              <Grid item>
                <p className="title">Resumo das transações</p>
              </Grid>
            </Grid>
                  
            <Grid container direction="row" className="card" alignItems="center">
             <Grid item>
                <p className="card-title success">Ganhos:</p>
              </Grid>
              <Grid item>
                <p className="card-value success">
                  {getTotalCredit(getFilteredTransactions(), true)}
                </p>
              </Grid>
            </Grid>
          
            <Grid container direction="row" className="card" alignItems="center">
             <Grid item>
                <p className="card-title error">Gastos:</p>
              </Grid>
              <Grid item>
                <p className="card-value error">
                  {getTotalDebit(getFilteredTransactions(), true)}
                </p>
              </Grid>
            </Grid>

            <Grid container direction="row" className="card" alignItems="center">
              <Grid item>
                <p className="card-title primary">Saldo: </p>
              </Grid>
              <Grid item>
                <p className="card-value primary"> 
                  {getTotalBalance(transactions, true)}
                </p>
              </Grid>
            </Grid>
          </CustomBox>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FinanceStatus;
