# Movie Search Application
For the BYU 2022 Coding Challenge

After you download the repository, navigate to `webservices` in your 
terminal and run `npm install` to install all dependencies for the back end. 
Then navigate to `webapp` and run the same command, `npm install` to install all dependencies for
the front end. 

Now enter the command `npm run dev` from the `webservices` folder in your terminal 
to start the back end, and run the same command, `npm run dev` in the `webapp` folder 
to start the front end. (you will need two instances of a terminal to run both).

Once you have both running, navigate to `localhost:3000` in your browser to view
the front end. You should see just a text input and a submit button. Entering 
a search term and clicking submit will make a call to your local back end to get 
results. 

Front-end server: `localhost:3000`<br>
Back-end server: `localhost:6060`

The following list is not exhaustive, but these are the main features I've implemented
in this repository
### Front end:
- Form with submission button (using text input)
- Api call to back end
- Display of returned information

### Back End:
- Api Endpoint with query parameters
- Middleware enforcing required parameters
- Asynchronous api calls
- Custom Errors
- Middleware to handle custom errors

[View Architectural Design](https://drive.google.com/file/d/1817yfaENMymtINkbMcgzn3fU2jI3j-77/view?usp=sharing)

## Next Steps:
- Unit Tests on Back end: I started writing unit tests for the back end, but wasn't quite familiar enough with Mocha to finish. I've detailed out in the test file a few of the types of tests I would write for logic like this. 
  - I wish that I had more time to write these as I feel that writing good unit tests is one of my strengths. I will call out that I'm much faster writing them in C#
- Front-end unit tests: I did not have time to write any front end unit tests. I would have like to write tests that ensure at least that the components mount.
- Clean up front end architecture: The front-end code is a little sloppy, I didn't have much time to clean that up
- Front end error handling: There's a couple different response codes that can be returned. Depending on the code, the front end should handle different response codes gracefully by displaying a uer friendly error from within the component. (For example, a 500 probably should display a generic "Something went wrong" code to the user)
- If I continued this application, there's much more functionality that could be added utilizing the Movie Database, as well as much better web design. For the sake of time, this is extremely basic and hasn't been changed from how Nuxt looks out of the box. 

