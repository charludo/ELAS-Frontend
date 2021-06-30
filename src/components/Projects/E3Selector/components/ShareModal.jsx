import ShareIcon from '@material-ui/icons/Share';
import Fab from '@material-ui/core/Fab';
import Modal from '@material-ui/core/Modal';
import { EmailShareButton, EmailIcon, TelegramShareButton, TelegramIcon, WhatsappShareButton, WhatsappIcon} from "react-share";
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

<Fab color="primary" className={classes.fab} onClick={switchModal}><ShareIcon/></Fab>
<Modal open={modalOpen} onClose={switchModal}>
	<div class="share-modal">
	  <Paper elevation={3} style={{padding: 40, borderRadius: 16}}>
		  <h1>Share or Save your course selections!</h1>
		  <WhatsappShareButton url={"http://localhost:3000/e3selector?shared=" + newSharedLink}><WhatsappIcon size={64} round={true}/></WhatsappShareButton>&nbsp;
		  <TelegramShareButton url={"http://localhost:3000/e3selector?shared=" + newSharedLink}><TelegramIcon size={64} round={true}/></TelegramShareButton>&nbsp;
		  <EmailShareButton url={"http://localhost:3000/e3selector?shared=" + newSharedLink}><EmailIcon size={64} round={true}/></EmailShareButton>
		  <CButton action={() => {navigator.clipboard.writeText("http://localhost:3000/e3selector?shared=" + newSharedLink); setLinkCopied(true)}} radius={24} classes={linkCopied ? classes.copiedButton : classes.copyButton}><FileCopyOutlinedIcon/>&nbsp;&nbsp;Copy Link</CButton>
	  </Paper>
	</div>
</Modal>
