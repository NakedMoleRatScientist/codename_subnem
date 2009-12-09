require 'rubygems'
require 'net/ftp'
require 'yaml'

def load_file file
  file = File.read(file)
  file = YAML::Load(file)
  return file
end

def write object, filename
  File.open filename, 'w' do |f|
    f.write(object.to_yaml)
  end
end

filename = 'utilities/config.yml'

if Dir.glob(filename) == true
#Warning:config.yml is full of password and other information that shall not be divulged.
  config = load(filename)

  ftp = NET::FTP.new(config['host'],config['username'],config['password'])
  ftp.login
  ftp.close
else
  yaml_object = {
    'host' => 'blah',
    'username' => 'blah',
    'password' => 'blah'
  }
  write(yaml_object, filename)
end
