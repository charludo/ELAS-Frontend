import React, { useState } from 'react';

import Fab from '@material-ui/core/Fab';
import Modal from '@material-ui/core/Modal';

import ShareIcon from '@material-ui/icons/Share';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import { EmailShareButton, EmailIcon, TelegramShareButton, TelegramIcon, WhatsappShareButton, WhatsappIcon} from "react-share";

import CButton from "./partials/CButton";
import classes from "../res/muiStyles";

export default const ShareModal (props) => {
	const [linkCopied, setLinkCopied] = useState(false);
	const [newSharedLink, setSharedLink] = useState("");
	const [modalOpen, setModal] = useState(false);
	const switchModal = () => {
		if (!modalOpen) {
			let shared = Math.random().toString(36).substring(7);
			fetch("http://localhost:5000/e3selector/shared/" + shared, {
				method: "POST",
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					e3selected: JSON.stringify(selectedList),
					e3filters: JSON.stringify(filterState)
				})
			});
			setSharedLink("http://localhost:3000/e3selector?shared=" + shared);
		}
		setModal(!modalOpen);
		setLinkCopied(false);
	}

	if (modalOpen) {
		return (
			<Modal open={modalOpen} onClose={switchModal}>
				<div class="share-modal">
					<Paper elevation={3} style={{padding: 40, borderRadius: 16}}>
						<h1>Share or Save your course selections!</h1>
						<WhatsappShareButton url={newSharedLink}><WhatsappIcon size={64} round={true}/></WhatsappShareButton>&nbsp;
						<TelegramShareButton url={newSharedLink}><TelegramIcon size={64} round={true}/></TelegramShareButton>&nbsp;
						<EmailShareButton url={newSharedLink}><EmailIcon size={64} round={true}/></EmailShareButton>
						<CButton action={() => {navigator.clipboard.writeText(newSharedLink); setLinkCopied(true)}} radius={24} classes={linkCopied ? classes.copiedButton : classes.copyButton}><FileCopyOutlinedIcon/>&nbsp;&nbsp;Copy Link</CButton>
					</Paper>
				</div>
			</Modal>
		);
	} else {
		return (
			<Fab color="primary" className={classes.fab} onClick={switchModal}><ShareIcon/></Fab>
		);
	}
}
