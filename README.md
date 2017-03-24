# Track Suggestor

#### A tool to help prospective students decide whether they should take the Ruby, Java, PHP or C# programming track, 3/24/2017

#### By Galin McMahon

## Description

When the user selects answers to the questions, each answer generates a value.  Answers that equate to Java are worth 1 point, C# 8 points, Ruby 16 points and PHP 23 points.  All points (values) are tallied and returned.  Total of 0-30 suggests Java, 31-60 suggests C#, 61-90 suggests Ruby and 91+ suggests PHP.  So if user selects, for example, 4 Java answers (1+1+1+1) and a PHP (23) then the total is 27 and user is recommended to look into Java.  The formulas are far from perfect and are pretty easy to fool (i.e. 3 Javas, 1 Ruby and 1 PHP suggests C#).

## Setup/Installation Requirements

* locate git repository at https://github.com/GalinMcMahon/Track-Suggestor.git
* Clone the above repository using git clone <above url>
* open the index.html file in a Chrome (preferred) browser
* Click the button to begin

## Known Bugs

Media screen resize issues, mostly at smaller sizes.  Left due to time constraints.

## Support and contact details

Please contact through git

## Technologies Used

Bootstrap, jQuery

## Image credits

Background image http://www.photos-public-domain.com/2012/05/24/blue-paper-texture/

### License

Open source.

Copyright (c) 2017 Galin McMahon
