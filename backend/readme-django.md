# Instruction for Creating Django Data

## Website completed by Michael Renda and Rome Duong

## In the folder, we have the following descriptions:

Project Name: mysite  
App Name: music

## In order to start and run the server (Ensure that your virtual environment is activated):
Make sure to change your directory to be inside the hw2django/mysite where manage.py file is present.  
Run the following command within the directory once virtual environment has been activated:  

```shell
python3 manage.py runserver
```

Head to this server in order to see the project deployment: <http://127.0.0.1:8000/>

## Login information for Admin Page
Open a Web browser and go to "/admin/" on your local domain such as <http://127.0.0.1:8000/admin/>.  
When you see the login screen, use the following credentials to log in: 

username: john  
password: doe

## Adding data into Django via Admin Page
Once the models in the models.py have been migrated, you will see the Music app  
Click on +ADD on the right side of each model in order to manually add the data and save them to the model.

## Step 1: Table for Users

Username: Otto  
Password: starWars2*

Username: Amelia-Earhart  
Password: Youaom139&yu7

## Step 2: Table for Ratings

Username: Amelia-Earhart  
Song: These Walls  
Rating: 4  

Username: Otto  
Song: Days of Wine and Roses  
Rating: 5  

Username: Amelia-Earhart  
Song: Days of Wine and Roses  
Rating: 4  

Username: Amelia-Earhart  
Song: Freeway  
Rating: 3


## Step 3: Table for Biographys (Our Table)

Artist: Kendrick Lamar  
Birthplace: Compton, CA  
Birthday: 1987-06-17  

Artist: Bill Evans  
Birthplace: Plainfield, NJ  
Birthday: 1929-08-16  

Artist: Aimee Mann  
Birthplace: Richmond, VA  
Birthday: 1960-09-08

## Step 4: Table for Artists (Added attributes include Genre, Album)  

Song: These Walls  
Artist: Kendrick Lamar  
Genre: Hip-Hop/Rap  
Album: To Pimp a Butterfly  

Song: Freeway  
Artist: Aimee Mann  
Genre: Alternative/Indie  
Album: Fucking Smilers  

Song: Days of Wine and Roses  
Artist: Bill Evans  
Genre: Jazz  
Album: Days of Wine and Roses  