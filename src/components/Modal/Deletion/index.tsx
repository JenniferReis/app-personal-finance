import { Grid } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { ModalBodyProps, ModalBody } from "..";
import { useFinances } from "../../../hooks/useFinances";
import { Transaction } from "../../../models/Transaction";
import { Description } from "./styles";

interface DeletationModalProps
  extends Omit<ModalBodyProps, "children" | "onClickPrimaryButton"> {
  selectedTransaction: Transaction | undefined;
  resetSelectedTransaction: () => void;
}

function DeletionModal({
  open,
  onClose,
  selectedTransaction,
  resetSelectedTransaction,
}: DeletationModalProps) {
  const { enqueueSnackbar } = useSnackbar();
  const { deleteTransaction, fetchTransactions } = useFinances();

  const handleDelete = async () => {
    if (selectedTransaction) {
      await deleteTransaction(selectedTransaction.id!)
        .then(() => {
          enqueueSnackbar("Transação deletada com sucesso", {
            variant: "success",
          });
        })
        .then(async () => await fetchTransactions().then(() => handleClose()));
    }
  };

  const handleClose = async () => {
    resetSelectedTransaction();
    if (onClose) {
      onClose();
    }
  };
  return (
    <ModalBody
      open={open}
      onClose={handleClose}
      modalTitle="Deseja excluir essa transação?"
      primaryButtonText="Deletar"
      onClickPrimaryButton={handleDelete}
      tertiaryButtonText="Cancelar"
      onClickTertiaryButton={handleClose}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item>
          <Description style={{marginTop: 50 }}>
            <p>
              {`Ao confirmar, a transação “${selectedTransaction?.title}” será excluída
              permanentemente.`}
            </p>
          </Description>
        </Grid>
      </Grid>
    </ModalBody>
  );
}

export default DeletionModal;
