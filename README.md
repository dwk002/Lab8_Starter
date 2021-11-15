# Lab 8 - Starter
**PARTNER: Do Kim & Ludvig Basmajyan**

**Check your Understanding**

**1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.**

*Reasoning:* We want to keep checking the code quality and functionality as we develop, 
not all at the end. A good way to consantly test during development is to test every time code is pushed.
This also ensures that all contributors' code is checked! 

**2.  Would you use an end to end test to check if a function is returning the correct output?**

No! It is meant to check the entire software product. Checking functions is more suitable for unit testing.

**3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.**
   
No. Instead it would be better to see the interaction between the devices of user that sends the message and the user that recieves the message.
Messaging is very focused on interaction between different parts, so using unit testing is not suitable

**4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.**

Yes. It is a feature that does not interact with other components that much. A small scale feature like this is suitable for unit testing.
