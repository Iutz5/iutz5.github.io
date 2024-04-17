var slider = document.getElementById("slider");
var selector = document.getElementById("selector");
var SelectValue = document.getElementById("SelectValue");
var Jamaica1687 = document.getElementById("Jamaica1687");
var Jamica1687box = document.getElementById("Jamaica1687-box");
var Jamaica1750 = document.getElementById("Jamaica1750");
var Jamaica1750box = document.getElementById("Jamaica1750-box")
var Martinique = document.getElementById("Martinique");
var Martiniquebox = document.getElementById("Martinique-box")
var New_York1736 = document.getElementById("New-York1736");
var New_York1736box = document.getElementById("New-York1736-box")
var New_York1803 = document.getElementById("New-York1803");
var New_York1803box = document.getElementById("New-York1803-box")
var New_York1840 = document.getElementById("New-York1840");
var New_York1840box = document.getElementById("New-York1840-box")
var Maryland1758 = document.getElementById("Maryland1758");
var Maryland1758box = document.getElementById("Maryland1758-box")
var Suriname1773 = document.getElementById("Suriname1773");
var Suriname1773box = document.getElementById("Suriname1773-box")
var Suriname1816 = document.getElementById("Suriname1816");
var Suriname1816box = document.getElementById("Suriname1816-box")
var Suriname1850 = document.getElementById("Suriname1850");
var Suriname1850box = document.getElementById("Suriname1850-box")
var SouthCarolina = document.getElementById("South-Carolina");
var SouthCarolinabox = document.getElementById("South-Carolina-box")
var SaintDomingue = document.getElementById("Saint-Domingue");
var SaintDominguebox = document.getElementById("Saint-Domingue-box")
var England = document.getElementById("England");
var Englandbox = document.getElementById("England-box")
var Louisiana1819 = document.getElementById("Louisiana1819");
var Louisiana1819box = document.getElementById("Louisiana1819-box")
var Louisiana1850 = document.getElementById("Louisiana1850");
var Louisiana1850box = document.getElementById("Louisiana1850-box")
var Haiti = document.getElementById("Haiti");
var Haitibox = document.getElementById("Haiti-box")

group1 = -1; // Jamacia(1687), Martinique
group2 = -1; // New York(1736)
group3 = -1; // Maryland, Jamaica(1750), Suriname(1773), South Carolina, Saint-Domingue, England
group4 = -1; // New York(1803), Suriname(1816), Louisiana(1819)
group5 = -1; // Haiti, Suriname(1850), New York(1840), Louisiana(1840)

SelectValue.innerHTML = slider.value;

slider.oninput = function(){
    SelectValue.innerHTML = this.value;
    selector.style.left = 49/150*(this.value - 1600)/2 +"%";
    if(this.value > 1689 && this.value < 1740){
        selector.style.zIndex = 3;
    } else {
        selector.style.zIndex = 1;
    }
    

    if(this.value > 1650 && this.value < 1700){
        Jamaica1687.style.opacity = 1;
        Jamaica1687.style.zIndex = 3;

        Martinique.style.opacity = 1;
        Martinique.style.zIndex = 3;
        
        //After
        New_York1736.style.opacity = 0;
    } else if(this.value > 1700 && this.value < 1750){
        //Before
        Jamaica1687.style.opacity = 0;
        Martinique.style.opacity = 0;
        Jamaica1687.style.zIndex = 0;
        Martinique.style.zIndex = 0;

        //During
        New_York1736.style.opacity = 1;
        New_York1736.style.zIndex = 3;

        //After
        Maryland1758.style.opacity = 0;
        Jamaica1750.style.opacity = 0;
        Suriname1773.style.opacity = 0;
        SouthCarolina.style.opacity = 0;
        SaintDomingue.style.opacity = 0;
        England.style.opacity = 0;
    }else if(this.value > 1750 && this.value < 1800){
        New_York1736.style.opacity = 0;
        New_York1736.style.zIndex = 0;
        Maryland1758.style.opacity = 1;
        Jamaica1750.style.opacity = 1;
        Suriname1773.style.opacity = 1;
        SouthCarolina.style.opacity = 1;
        SaintDomingue.style.opacity = 1;
        England.style.opacity = 1;
        Maryland1758.style.zIndex = 3;
        Jamaica1750.style.zIndex = 3;
        Suriname1773.style.zIndex = 3;
        SouthCarolina.style.zIndex = 3;
        SaintDomingue.style.zIndex = 3;
        England.style.zIndex = 3;

        //After
        New_York1803.style.opacity = 0;
        Suriname1816.style.opacity = 0;
        Louisiana1819.style.opacity = 0;        
    }else if(this.value > 1800 && this.value < 1820){
        //Before
        Maryland1758.style.opacity = 0;
        Jamaica1750.style.opacity = 0;
        Suriname1773.style.opacity = 0;
        SouthCarolina.style.opacity = 0;
        SaintDomingue.style.opacity = 0;
        England.style.opacity = 0;
        Maryland1758.style.zIndex = 0;
        Jamaica1750.style.zIndex = 0;
        Suriname1773.style.zIndex = 0;
        SouthCarolina.style.zIndex = 0;
        SaintDomingue.style.zIndex = 0;
        England.style.zIndex = 0;

        //During
        New_York1803.style.opacity = 1;
        Suriname1816.style.opacity = 1;
        Louisiana1819.style.opacity = 1;
        New_York1803.style.zIndex = 3;
        Suriname1816.style.zIndex = 3;
        Louisiana1819.style.zIndex = 3;

        //After
        Haiti.style.opacity = 0;
        Suriname1850.style.opacity = 0;
        New_York1840.style.opacity = 0;
        Louisiana1850.style.opacity = 0;        
    }else if(this.value > 1840 && this.value < 1900){
        New_York1803.style.opacity = 0;
        Suriname1816.style.opacity = 0;
        Louisiana1819.style.opacity = 0;
        New_York1803.style.zIndex = 0;
        Suriname1816.style.zIndex = 0;
        Louisiana1819.style.zIndex = 0;
        Haiti.style.opacity = 1;
        Suriname1850.style.opacity = 1;
        New_York1840.style.opacity = 1;
        Louisiana1850.style.opacity = 1;
        Haiti.style.zIndex = 3;
        Suriname1850.style.zIndex = 3;
        New_York1840.style.zIndex = 3;
        Louisiana1850.style.zIndex = 3;
        if(group4 > 0){
            group4 = -1;
        }
        if(group5 < 0){
            group5 = 1;
        }
    }
    else{
        Jamaica1687.style.opacity = 0;
        Martinique.style.opacity = 0;
        New_York1736.style.opacity = 0;
        Maryland1758.style.opacity = 0;
        Jamaica1750.style.opacity = 0;
        Suriname1773.style.opacity = 0;
        SouthCarolina.style.opacity = 0;
        SaintDomingue.style.opacity = 0;
        England.style.opacity = 0;
        New_York1803.style.opacity = 0;
        Suriname1816.style.opacity = 0;
        Louisiana1819.style.opacity = 0;
        Haiti.style.opacity = 0;
        Suriname1850.style.opacity = 0;
        New_York1840.style.opacity = 0;
        Louisiana1850.style.opacity = 0;
        
        Jamaica1687.style.zIndex = 0;
        Martinique.style.zIndex = 0;
        New_York1736.style.zIndex = 0;
        Maryland1758.style.zIndex = 0;
        Jamaica1750.style.zIndex = 0;
        Suriname1773.style.zIndex = 0;
        SouthCarolina.style.zIndex = 0;
        SaintDomingue.style.zIndex = 0;
        England.style.zIndex = 0;
        New_York1803.style.zIndex = 0;
        Suriname1816.style.zIndex = 0;
        Louisiana1819.style.zIndex = 0;
        Haiti.style.zIndex = 0;
        Suriname1850.style.zIndex = 0;
        New_York1840.style.zIndex = 0;
        Louisiana1850.style.zIndex = 0;

        group1 = -1;
        group2 = -1;
        group3 = -1;
        group4 = -1;
        group5 = -1;
    }
}
document.querySelectorAll('input[type="range"]').forEach((input) => { 
    input.addEventListener('mousedown',  () => window.getSelection().removeAllRanges());
});

Jamaica1687.addEventListener('mouseover', function() {
    // Show the child element when parent is hovered
    Jamica1687box.style.opacity = 1;
    if(Jamaica1687.style.opacity == 1){
        Jamaica1687.style.display = 'inline';
    }
    else{
        Jamaica1687.style.display = 'none';
    }
});
Jamaica1687.addEventListener('mouseout', function() {
    // Show the child element when parent is hovered
    Jamica1687box.style.opacity = 0;
    if(Jamaica1687.style.opacity == 0){
        Jamaica1687.style.display = 'none';
    }
});

Jamaica1750.addEventListener('mouseover', function() {
    // Show the child element when parent is hovered
    Jamaica1750box.style.opacity = 1;
    if(Jamaica1750.style.opacity == 1){
        Jamaica1750.style.display = 'inline';
    }
    else{
        Jamaica1750.style.display = 'none';
    }
});
Jamaica1750.addEventListener('mouseout', function() {
    // Show the child element when parent is hovered
    Jamaica1750box.style.opacity = 0;
    if(Jamaica1750.style.opacity == 0){
        Jamaica1750.style.display = 'none';
    }
});

Martinique.addEventListener('mouseover', function() {
    // Show the child element when parent is hovered
    Martiniquebox.style.opacity = 1;
    if(Martinique.style.opacity == 1){
        Martinique.style.display = 'inline';
    }
    else{
        Martinique.style.display = 'none';
    }
});
Martinique.addEventListener('mouseout', function() {
    // Show the child element when parent is hovered
    Martiniquebox.style.opacity = 0;
    if(Martinique.style.opacity == 0){
        Martinique.style.display = 'none';
    }
});

New_York1736.addEventListener('mouseover', function() {
    // Show the child element when parent is hovered
    New_York1736box.style.opacity = 1;
    if(New_York1736.style.opacity == 1){
        New_York1736.style.display = 'inline';
    }
    else{
        New_York1736.style.display = 'none';
    }
});
New_York1736.addEventListener('mouseout', function() {
    // Show the child element when parent is hovered
    New_York1736box.style.opacity = 0;
    if(New_York1736.style.opacity == 0){
        New_York1736.style.display = 'none';
    }
});

Maryland1758.addEventListener('mouseover', function() {
    // Show the child element when parent is hovered
    Maryland1758box.style.opacity = 1;
    if(Maryland1758.style.opacity == 1){
        Maryland1758.style.display = 'inline';
    }
    else{
        Maryland1758.style.display = 'none';
    }
});
Maryland1758.addEventListener('mouseout', function() {
    // Show the child element when parent is hovered
    Maryland1758box.style.opacity = 0;
    if(Maryland1758.style.opacity == 0){
        Maryland1758.style.display = 'none';
    }
});

Suriname1773.addEventListener('mouseover', function() {
    // Show the child element when parent is hovered
    Suriname1773box.style.opacity = 1;
    if(Suriname1773.style.opacity == 1){
        Suriname1773.style.display = 'inline';
    }
    else{
        Suriname1773.style.display = 'none';
    }
});
Suriname1773.addEventListener('mouseout', function() {
    // Show the child element when parent is hovered
    Suriname1773box.style.opacity = 0;
    if(Suriname1773.style.opacity == 0){
        Suriname1773.style.display = 'none';
    }
});

SouthCarolina.addEventListener('mouseover', function() {
    // Show the child element when parent is hovered
    SouthCarolinabox.style.opacity = 1;
    if(SouthCarolina.style.opacity == 1){
        SouthCarolina.style.display = 'inline';
    }
    else{
        SouthCarolina.style.display = 'none';
    }
});
SouthCarolina.addEventListener('mouseout', function() {
    // Show the child element when parent is hovered
    SouthCarolinabox.style.opacity = 0;
    if(SouthCarolina.style.opacity == 0){
        SouthCarolina.style.display = 'none';
    }
});

SaintDomingue.addEventListener('mouseover', function() {
    // Show the child element when parent is hovered
    SaintDominguebox.style.opacity = 1;
    if(SaintDomingue.style.opacity == 1){
        SaintDomingue.style.display = 'inline';
    }
    else{
        SaintDomingue.style.display = 'none';
    }
});
SaintDomingue.addEventListener('mouseout', function() {
    // Show the child element when parent is hovered
    SaintDominguebox.style.opacity = 0;
    if(SaintDomingue.style.opacity == 0){
        SaintDomingue.style.display = 'none';
    }
});

England.addEventListener('mouseover', function() {
    // Show the child element when parent is hovered
    Englandbox.style.opacity = 1;
    if(England.style.opacity == 1){
        England.style.display = 'inline';
    }
    else{
        England.style.display = 'none';
    }
});
England.addEventListener('mouseout', function() {
    // Show the child element when parent is hovered
    Englandbox.style.opacity = 0;
    if(England.style.opacity == 0){
        England.style.display = 'none';
    }
});

New_York1803.addEventListener('mouseover', function() {
    // Show the child element when parent is hovered
    New_York1803box.style.opacity = 1;
    if(New_York1803.style.opacity == 1){
        New_York1803.style.display = 'inline';
    }
    else{
        New_York1803.style.display = 'none';
    }
});
New_York1803.addEventListener('mouseout', function() {
    // Show the child element when parent is hovered
    New_York1803box.style.opacity = 0;
    if(New_York1803.style.opacity == 0){
        New_York1803.style.display = 'none';
    }
});

Suriname1816.addEventListener('mouseover', function() {
    // Show the child element when parent is hovered
    Suriname1816box.style.opacity = 1;
    if(Suriname1816.style.opacity == 1){
        Suriname1816.style.display = 'inline';
    }
    else{
        Suriname1816.style.display = 'none';
    }
});
Suriname1816.addEventListener('mouseout', function() {
    // Show the child element when parent is hovered
    Suriname1816box.style.opacity = 0;
    if(Suriname1816.style.opacity == 0){
        Suriname1816.style.display = 'none';
    }
});

Haiti.addEventListener('mouseover', function() {
    // Show the child element when parent is hovered
    Haitibox.style.opacity = 1;
    if(Haiti.style.opacity == 1){
        Haiti.style.display = 'inline';
    }
    else{
        Haiti.style.display = 'none';
    }
});
Haiti.addEventListener('mouseout', function() {
    // Show the child element when parent is hovered
    Haitibox.style.opacity = 0;
    if(Haiti.style.opacity == 0){
        Haiti.style.display = 'none';
    }
});

Suriname1850.addEventListener('mouseover', function() {
    // Show the child element when parent is hovered
    Suriname1850box.style.opacity = 1;
    if(Suriname1850.style.opacity == 1){
        Suriname1850.style.display = 'inline';
    }
    else{
        Suriname1850.style.display = 'none';
    }
});
Suriname1850.addEventListener('mouseout', function() {
    // Show the child element when parent is hovered
    Suriname1850box.style.opacity = 0;
    if(Suriname1850.style.opacity == 0){
        Suriname1850.style.display = 'none';
    }
});

New_York1840.addEventListener('mouseover', function() {
    // Show the child element when parent is hovered
    New_York1840box.style.opacity = 1;
    if(New_York1840.style.opacity == 1){
        New_York1840.style.display = 'inline';
    }
    else{
        New_York1840.style.display = 'none';
    }
});
New_York1840.addEventListener('mouseout', function() {
    // Show the child element when parent is hovered
    New_York1840box.style.opacity = 0;
    if(New_York1840.style.opacity == 0){
        New_York1840.style.display = 'none';
    }
});

Louisiana1819.addEventListener('mouseover', function() {
    // Show the child element when parent is hovered
    Louisiana1819box.style.opacity = 1;
    if(Louisiana1819.style.opacity == 1){
        Louisiana1819.style.display = 'inline';
    }
    else{
        Louisiana1819.style.display = 'none';
    }
});
Louisiana1819.addEventListener('mouseout', function() {
    // Show the child element when parent is hovered
    Louisiana1819box.style.opacity = 0;
    if(Louisiana1819.style.opacity == 0){
        Louisiana1819.style.display = 'none';
    }
});

Louisiana1850.addEventListener('mouseover', function() {
    // Show the child element when parent is hovered
    Louisiana1850box.style.opacity = 1;
    if(Louisiana1850.style.opacity == 1){
        Louisiana1850.style.display = 'inline';
    }
    else{
        Louisiana1850.style.display = 'none';
    }
});
Louisiana1850.addEventListener('mouseout', function() {
    // Show the child element when parent is hovered
    Louisiana1850box.style.opacity = 0;
    if(Louisiana1850.style.opacity == 0){
        Louisiana1850.style.display = 'none';
    }
});

/*
// Define a function to be executed
function checkGroups() {
    if(group1 > 0){
        console.log('1pos');
        New_York1736.style.zIndex = -1;
        Maryland1758.style.zIndex = -1;
        Jamaica1750.style.zIndex = -1;
        Suriname1773.style.zIndex = -1;
        SouthCarolina.style.zIndex = -1;
        SaintDomingue.style.zIndex = -1;
        New_York1803.style.zIndex = -1;
        Suriname1816.style.zIndex = -1;
        Louisiana1819.style.zIndex = -1;
        Haiti.style.zIndex = -1;
        Suriname1850.style.zIndex = -1;
        Louisiana1850.style.zIndex = -1;
        New_York1840.style.zIndex = -1;
    } else if(group2 > 0){
        console.log('2pos');
    } else if(group3 > 0){
        console.log('3pos');
    } else if(group4 > 0){
        console.log('4pos');
    } else if(group5 > 0){
        console.log('5pos');
    }

}
group1 = -1; // Jamacia(1687), Martinique
group2 = -1; // New York(1736)
group3 = -1; // Maryland, Jamaica(1750), Suriname(1773), South Carolina, Saint-Domingue, England
group4 = -1; // New York(1803), Suriname(1816), Louisiana(1819)
group5 = -1; // Haiti, Suriname(1850), New York(1840), Louisiana(1840)
var intervalID = setInterval(checkGroups, 500);
*/
