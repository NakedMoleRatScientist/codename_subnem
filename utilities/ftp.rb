require 'rubygems'
require 'net/ftp'
require 'yaml'

def load_file file
  file = File.read(file)
  file = YAML::load(file)
  return file
end

def write object, filename
  File.open filename, 'w' do |f|
    f.write(object.to_yaml)
  end
end

filename = 'utilities/config.yml'

if File.exist?(filename) == true
  puts"Attempting connection"
#Warning:config.yml is full of password and other information that shall not be divulged.
  config = load_file(filename)
  ftp = Net::FTP.new(config['host'],config['username'],config['password'])
  puts"Closing connection"
  ftp.close
else
  puts"utilities/config.yml is not found. Creating file"
  yaml_object = {
    'host' => 'blah',
    'username' => 'blah',
    'password' => 'blah'
  }
  write(yaml_object, filename)
  puts"Done. Retry utilities/ftp.rb again"
end
