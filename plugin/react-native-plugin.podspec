require 'json'
package = JSON.parse(File.read('package.json'))

Pod::Spec.new do |s|
  s.name                = "react-native-segment-plugin-moengage"
  s.version             = package["version"]
  s.description         = package["description"]
  s.summary             = <<-DESC
                            Plugin to integrate MoEngage SDK with Segment React Native SDK
                          DESC
  s.homepage            = "https://www.moengage.com"
  s.license             = package['license']
  s.authors             = "MoEngage"
  s.source              = {:file => './' }
  s.platform            = :ios, "10.0"
  s.source_files        = 'iOS/MoEReactBridge/**/*.{h,m}'
  s.dependency          'React'
end