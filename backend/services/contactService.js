export class ContactService {
  constructor(databaseService, emailService) {
    this.databaseService = databaseService;
    this.emailService = emailService;
  }

  async storeMessage(messageData) {
    try {
      const storedMessage = await this.databaseService.storeMessage(messageData);
      console.log(`📝 Message stored with ID: ${storedMessage.id}`);
      return storedMessage;
    } catch (error) {
      console.error('Error storing message:', error);
      throw error;
    }
  }

  async sendEmailNotification(messageData) {
    try {
      // Send notification email to the portfolio owner
      await this.emailService.sendContactNotification(messageData);
      
      // Send auto-reply to the person who submitted the form
      if (process.env.SEND_AUTO_REPLY === 'true') {
        await this.emailService.sendAutoReply(messageData);
      }
      
      console.log('📧 Email notifications sent successfully');
    } catch (error) {
      console.error('Error sending email notifications:', error);
      // Don't throw error here - we don't want email failures to break the form submission
      console.log('⚠️ Message was stored but email notification failed');
    }
  }

  async getAllMessages() {
    try {
      return await this.databaseService.getAllMessages();
    } catch (error) {
      console.error('Error fetching messages:', error);
      throw error;
    }
  }

  async getMessageById(id) {
    try {
      return await this.databaseService.getMessageById(id);
    } catch (error) {
      console.error('Error fetching message:', error);
      throw error;
    }
  }
}
