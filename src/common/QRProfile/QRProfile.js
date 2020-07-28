import React, { useContext } from "react";
import QRCode from "qrcode.react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Typography,
} from "@material-ui/core";

import { ButtonContained, ButtonOutlined } from "common/buttons";
import { OpenContext } from "hooks";
import { useTranslation } from "react-i18next";
import { DownloadButton } from "common/DownloadButton";

export default function QRP({ url }) {
  const { open, setOpen, setClose } = useContext(OpenContext);
  const { t } = useTranslation();
  return (
    <div>
      <ButtonContained title={t("profile.qrcode.button")} action={setOpen} />

      <Dialog
        onClose={setClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={setClose}>
          {t("profile.qrcode.title")}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <QRCode value={url} size={200} />
          </Typography>
        </DialogContent>
        <DialogActions>
          <ButtonOutlined action={setClose} title={t("profile.qrcode.close")} />
          <DownloadButton image={<QRCode value={url} size={200} />} />
        </DialogActions>
      </Dialog>
    </div>
  );
}
