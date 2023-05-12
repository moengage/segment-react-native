require 'json'
package = JSON.parse(File.read('package.json'))

Pod::Spec.new do |s|
  s.name                = "ReactNativeSegmentMoEngage"
  s.version             = package["version"]
  s.description         = package["description"]
  s.summary             = <<-DESC
                            A React Native plugin for implementation of MoEngage-iOS-SDK.
                          DESC
  s.homepage            = "https://www.moengage.com"
  s.license             = package['license']
  s.authors             = "MoEngage Inc."
  s.source              = {:file => './' }
  s.platform            = :ios, "11.0"
  s.source_files        = 'iOS/MoEngageSegmentReactBridge/MoEngageSegmentReactBridge/**/*.{h,m}'
  s.dependency          'React'
  s.dependency          'MoEngageSegmentPluginBase','>= 1.0.0','< 1.1.0'

  s.prepare_command = <<-CMD
    echo // Generated file, do not edit > iOS/MoEngageSegmentReactBridge/MoEngageSegmentReactPluginInfo.h
    echo "#define MOE_REACT_SEGMENT_PLUGIN_VERSION @\\"#{package["version"]}\\"" >> iOS/MoEngageSegmentReactBridge/MoEngageReactSegmentPluginInfo.h
  CMD
end
