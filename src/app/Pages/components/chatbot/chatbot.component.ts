import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chatbotresponses } from '../../../core/constants/chatBot';
import { ScrollToTopService } from '../../../core/services/scroll-to-top.service';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
   constructor(scrollToTopService: ScrollToTopService) {

  }
 messages: any = [
   { messages:"Hello, how can I help you today?",user:true},
   { messages:"I'm here to answer your questions and provide assistance.",user:true}
  ];

  newMessage: string = "";

   Chatbotresponses=Chatbotresponses

  sendMessage() {
   var temp= { messages:this.newMessage,user:false}
    this.messages.push(temp);

    const response = this.Chatbotresponses.Chatbotresponsesdetails.find(ser => this.calculateMatchPercentage(ser.key ,this.newMessage) ||  this.calculateMatchPercentage(this.newMessage ,ser.key)) // Use type assertion
    if (response) {
        var temp = { messages:response.value,user:true}
    this.messages.push(temp);
    } else {
      this.messages.push({ messages:"I couldn't understand your message. Please try rephrasing.",user:true});
    }
        this.newMessage = '';
  }

 calculateMatchPercentage(string1: string, string2: string) {
   if (string1.includes(string2)) {
     return true
  //  const wordsToReplace = ["what ", "if ", "you ","your "," is "," "];
  //   for (const word of wordsToReplace) {
  //     string2 = string2.replace(word ,"");
  //    }
  //    console.log(string2)
  //    if (string1.length === 0 || string2.length === 0) {
  //   return false; // If either string is empty, there's no match
  // }

  // let matches = 0;
  // for (let i = 0; i < Math.min(string1.length, string2.length); i++) {
  //   if (string1.charAt(i) === string2.charAt(i)) {
  //     matches++;
  //   }
  // }

  //  if (((matches / Math.max(string1.length, string2.length)) * 100) >= 60) {
  //    return true
  //  } else {
  //     return false
  // };
   } else {
      return false
 }

}
}
