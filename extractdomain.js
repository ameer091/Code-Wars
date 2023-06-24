/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

function getDomainName(url) {
  // Remove the protocol (e.g., "http://", "https://")
  let domain = url.replace(/^(https?:\/\/)?/, "");

  // Remove the "www." prefix if it exists
  domain = domain.replace(/^www\./, "");

  // Extract the domain name (e.g., "github.com", "zombie-bites.com", "cnet.com")
  const domainParts = domain.split(".");
  domain = domainParts[0];

  return domain;
}

//Other Solutions
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

//Other Solutions
function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}


//Other Solutions
function domainName(url){
  return url.replace(/.+\/\/|www.|\..+/g, '')
}


//Other Solutions
const removeStrStart = possibleStarts => str => {
  const startUsed = possibleStarts.find(s => str.startsWith(s))
  return startUsed !== undefined
    ? str.substr(startUsed.length)
    : str
}

const PROTOCOLS = ['http://', 'https://']
const removeProtocol = removeStrStart(PROTOCOLS)

/*
 * That's not the right thing to do in production
 * because any subdomain name is valid and there
 * can be many nested subdomains.
 * More on that: https://serverfault.com/a/278296
 */
const SUBDOMAINS = ['www.']
const removeSubdomain = removeStrStart(SUBDOMAINS)

const domainName = url =>
  removeSubdomain(removeProtocol(url)).split('.')[0]