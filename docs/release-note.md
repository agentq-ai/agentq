---
sidebar_position: 2
---

# Release Notes

## Version 1.5

#### Improvement
- add search feature on test run detail page
<img src={require('@site/static/img/release/v1.5/1.png').default} alt="search on test run detail page" style={{ maxWidth: '30%'}} />
- add tags test cases table 
<img src={require('@site/static/img/release/v1.5/2.png').default} alt="tags" style={{ maxWidth: '30%'}} />
- click detail test case will become edit test case modal

#### Bug Fix
- remove id on import csv template


## Version 1.4

#### Improvement
- add search box paggination on test cases page
<img src={require('@site/static/img/release/v1.4/1.png').default} alt="search page" style={{ maxWidth: '60%'}} />

#### Bug Fix
- solve paggination issue on test cases page, when user after edit on page > 1, will redirect to 1st page
- enable paggination on test cases page
- frontend need handle error during import test case with extend timeout
- only enable delete selected on test cases page


## Version 1.3

#### Improvement
- improve test run creation based on tags
<img src={require('@site/static/img/release/v1.3/1.png').default} alt="test run based on tags" style={{ maxWidth: '60%'}} />


## Version 1.2

#### Improvement
- remove project header on test run detail page
- enable sub folder for dynamic filter test run
- enable CSV file template for import test cases
<img src={require('@site/static/img/release/v1.2/1.png').default} alt="csv template.id" style={{ maxWidth: '50%'}} />
- enable tags on test cases creation
<img src={require('@site/static/img/release/v1.2/2.png').default} alt="tags filed.id" style={{ maxWidth: '50%'}} />

#### Bug Fix
- fix data import error with capital letters
- fix timout during import csv file on frontend
- fix test result empty after edit dynamic filter test run


## Version 1.1

#### Improvement
- improve confirmation modal with progress bar
<img src={require('@site/static/img/release/v1.1/1.png').default} alt="login agentq.id" style={{ maxWidth: '30%'}} />

- improve import modal with progress bar
<img src={require('@site/static/img/release/v1.1/2.png').default} alt="login agentq.id" style={{ maxWidth: '30%'}} />

#### Bug Fix
- bug fix pagination on test cases page
- bug fix bulk delete
