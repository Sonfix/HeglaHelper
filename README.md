# HeglaHelper

---
## Events

1. Message: 
Every message events analyses the content and checks if there some commands matching for the given data.


---
## Commands

All commands can be started by using the prefix ! before any command. 

1. Roll:
   Roll takes no parameters and returns to the author of the command a random number between 0 and 100. It's planned to give this command two parameters to set borders to it.
2. Palindrom:
   This command checks if the given string is a palindrom. Every character after the whitespace will be seen as the given string. ``` !Palindrom Race car ```
3. Lidl: This command subsribes the author to the "Lidl" list. This command can take 2 different parameters. 
   * -r: Removes the author from the "Lidl" list.
   * -list: Returns the list to the author.
   * TODOs: Broadcast list at a given time to a given channel. Clear list everyday
4. Thai: This command got multiple uses. If no parameter is given this command will return the daily menue of the thai. This command can take the following parameters:
   * If the string after the whitespace does not start with an '-' the follwing characters will senn as the menuenumber. ``` !Thai H3 ```
   * -r: Removes the author from the 'Thai' list.
   * -list: Returns the list from all subscribed members with their enterd menues.
   * -addDaily: Take two parameters. ``` !Thai -addDaily 2 H2 ```
      * First: The number of the day. 1 -> Monday 2 -> Tuesday and so on.
	  * Second: Name of the Menue.
   * TODOs: 
      * Broadcast list at a given time to a given channel or directmessage. 
	  * Clear list everyday.
5. Vote: This command is still in its building phase. With this command you can vote for any member of given roles in the guild. ``` !Vote @[Name] [Points] [Reason(oprional)] ``` This command takes 3 Parameters:
   * [Name]: Mention the member you want to vote for.
   * [Points]: the points you want to give to the member.
   * [Reason]: This one is an optional parameter. You can add a reason for every vote you make.
6. CoinToss: This command returns if the coin lands on head, tail.
   
## Upcomming Features

1. Minigames
2. Calculation from 1.5 hours to 1 hour and 30 minutes and maybe back
3. Get expenses for given country

   
## Memory Management

As you my noticed this bot has to make some memory management to keep track of who subscribes to which list or to save all the votes. For this the bot uses simple JSON Files to keep everythin in mind.

1. The Lidl and Thai list are saved in the same file.
``` json
{
	"Lidl":{
		"Date":"2019-10-04",
		"Participants":[
			{ "ID":"1234567890", "Name":"Sonfix" }
		]
	},
	"Thai":{
		"Date":"2019-10-04",
		"Participants":[
			{ "ID":"1234567890", "Name":"Sonfix", "Menue":"H3"} 
		]	
	}
}
```

2. The votes are saved in the following way:
``` json
{
	"members":[
		{ "ID":"1234567890",
		  "Votes":[ 
			  { "Values":1, "Reason":"Good Boi" }
		  ]
		}
	]
}
```

3. The daily menue is saved as follwed:
``` json
{
	"Thai":{
		"1":"H1",
		"2":"H2",
		"3":"H3",
		"4":"H4",
		"5":"H5",
		"6":"H6",
		"7":"H7"
	}
}
```
   
